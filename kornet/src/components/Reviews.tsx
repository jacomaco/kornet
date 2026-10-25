import { useState, useEffect, useId, type FocusEvent } from 'react'
import './styles/Reviews.css'

const Star = ({ fillPercentage }: { fillPercentage: number }) => {
  const gradientId = useId();

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="star-svg"
      style={{ color: '#B4A16A' }}
    >
      <defs>
        <linearGradient id={gradientId}>
          <stop offset={`${fillPercentage}%`} stopColor="#B4A16A" />
          <stop offset={`${fillPercentage}%`} stopColor="transparent" />
        </linearGradient>
      </defs>
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div
      className="star-rating-wrapper"
      style={{ display: 'inline-flex', gap: '3px' }}
      role="img"
      aria-label={`${String(rating).replace('.', ',')} av 5 stjärnor`}
    >
      {[1, 2, 3, 4, 5].map((starValue) => {
        const diff = rating - (starValue - 1);
        let fillPercentage = 0;
        if (diff >= 1) {
          fillPercentage = 100;
        } else if (diff > 0) {
          fillPercentage = diff * 100;
        }
        return <Star key={starValue} fillPercentage={fillPercentage} />;
      })}
    </div>
  );
};

const reviewsData = [
  {
    name: 'Marianne P.',
    time: 'för ungefär en månad sedan',
    rating: 5,
    text: 'Vänligt och engagerat Proffsig massage!'
  },
  {
    name: 'Annica I.',
    time: 'för 8 månader sedan',
    rating: 5,
    text: 'Jätteskön massage'
  },
  {
    name: 'Moa',
    age: '32 år',
    rating: 5,
    text: 'Jättebra massage'
  },
  {
    name: 'Agnes',
    age: '43 år',
    rating: 5,
    text: 'Så skön ansiktsmassage och vilket resultat, bokar in nästa behandling snart igen'
  },
  {
    name: 'Hirsto',
    age: '34 år',
    rating: 5,
    text: 'Helt underbart och magiskt'
  },
  {
    name: 'Cecilia',
    age: '52 år',
    rating: 5,
    text: 'Den bästa fotmassagen jag varit på, helt fantastiskt'
  },
  {
    name: 'Aneta',
    age: '46 år',
    rating: 5,
    text: 'Nu känner jag mig som nyfödd'
  },
  {
    name: 'Kicki',
    age: '69 år',
    rating: 5,
    text: 'Fantastisk massage, en av de bästa'
  }
]

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1))
    }, 8000)

    return () => clearInterval(interval)
  }, [isPaused, prefersReducedMotion])

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsPaused(false)
    }
  }

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-heading">Vad mina kunder säger</h2>
        <div className="reviews-rating-summary">
          <span className="rating-score">4.3</span>
          <div className="stars">
            <StarRating rating={4.3} />
          </div>
          <span className="rating-count">Baserat på över 150 betyg från Bokadirekt</span>
          <a
            className="reviews-link"
            href="https://www.bokadirekt.se/places/kornets-halso-spa-5162"
            target="_blank"
            rel="noopener noreferrer"
          >
            Läs alla omdömen på Bokadirekt
          </a>
        </div>

        <div
          className="reviews-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={handleBlur}
        >
          <button type="button" className="slider-btn prev-btn" onClick={prevSlide} aria-label="Föregående omdöme">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          <div className="slider-track-container">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewsData.map((review) => (
                <div className="review-card-wrapper" key={`${review.name}-${review.text}`}>
                  <div className="review-card">
                    <div className="review-stars">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="review-text">"{review.text}"</p>
                    <div className="review-author">
                      <span className="author-name">
                        {review.name}
                        {review.age && <span className="author-meta">, {review.age}</span>}
                        {review.time && <span className="author-meta"> • {review.time}</span>}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="slider-btn next-btn" onClick={nextSlide} aria-label="Nästa omdöme">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

        <div className="slider-dots">
          {reviewsData.map((review, index) => (
            <button
              type="button"
              key={`${review.name}-${review.text}`}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Gå till omdöme ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
