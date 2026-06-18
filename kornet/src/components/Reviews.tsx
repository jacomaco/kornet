import { useState, useEffect, useId } from 'react'
import './styles/Reviews.css'

const Star = ({ fillPercentage }: { fillPercentage: number }) => {
  const gradientId = useId();
  
  return (
    <svg 
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
    <div className="star-rating-wrapper" style={{ display: 'inline-flex', gap: '3px' }}>
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

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviewsData.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviewsData.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [isPaused, currentIndex])

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-heading">Vad våra kunder säger</h2>
        <div className="reviews-rating-summary">
          <span className="rating-score">4.3</span>
          <div className="stars">
            <StarRating rating={4.3} />
          </div>
          <span className="rating-count">Baserat på över 150 betyg från Bokadirekt</span>
        </div>

        <div 
          className="reviews-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Föregående omdöme">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <div className="slider-track-container">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviewsData.map((review, index) => (
                <div className="review-card-wrapper" key={index}>
                  <div className="review-card">
                    <div className="review-stars">
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="review-text">"{review.text}"</p>
                    <div className="review-author">
                      <span className="author-name">{review.name}</span>
                      {review.time && <span className="author-meta">{review.time}</span>}
                      {review.age && <span className="author-meta">{review.age}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Nästa omdöme">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        
        <div className="slider-dots">
          {reviewsData.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Gå till omdöme ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
