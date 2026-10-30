import './styles/Hero.css'
import dalarnaImageLarge from '../assets/dalarna-sol-2400.webp'
import dalarnaImageSmall from '../assets/dalarna-sol-1200.webp'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <img
        src={dalarnaImageLarge}
        srcSet={`${dalarnaImageSmall} 1200w, ${dalarnaImageLarge} 2400w`}
        sizes="100vw"
        alt="Solnedgång över fälten i Dalarna"
        className="hero-background"
        width="2400"
        height="1800"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-location">
            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            <span>Södermalm, Stockholm</span>
          </div>
          <h1>Hälsosam ansikts- och kroppsvård på Södermalm</h1>
          <p>Hudvård, massage och mindfulness i en lugn och stressfri miljö.</p>
          <div className="hero-ctas">
            <a href="https://www.bokadirekt.se/places/kornets-halso-spa-5162" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Boka tid</a>
            <a href="#treatments" className="btn btn-secondary">Se behandlingar</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
