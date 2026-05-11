import { useState, useEffect } from 'react'
import './styles/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className={`navbar-logo ${isOpen ? 'hidden-on-mobile' : ''}`} onClick={() => setIsOpen(false)}>
          <div className="logo-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wheat-icon lucide-wheat"><path d="M2 22 16 8" /><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" /><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /></svg>
          </div>
          <span className="navbar-logo-text">Sofia Knuts Johansson</span>
        </a>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}></div>

        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={() => setIsOpen(false)}>Hem</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>Om Sofia</a></li>
          <li><a href="#treatments" className="nav-link" onClick={() => setIsOpen(false)}>Behandlingar</a></li>
          <li><a href="#asea" className="nav-link" onClick={() => setIsOpen(false)}>Asea</a></li>
          <li><a href="#reviews" className="nav-link" onClick={() => setIsOpen(false)}>Omdömen</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Kontakt</a></li>
          <li className="nav-cta-item"><a href="https://www.bokadirekt.se/places/kornets-halso-spa-5162" target="_blank" rel="noopener noreferrer" className="navbar-btn" onClick={() => setIsOpen(false)}>Boka tid</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
