import './styles/Footer.css'

function Footer() {
  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wheat-icon"><path d="M2 22 16 8" /><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" /><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" /><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" /></svg>
            <span>Kornets Hälso Spa</span>
          </div>
          <p className="footer-bio">
            Sofia Knuts Johansson <br/>
            Hälsosam ansikts- och kroppsvård för alla, utan tveksamma kemikalier.
          </p>
        </div>

        <div className="footer-col links-col">
          <h2 className="footer-heading">Länkar</h2>
          <ul className="footer-links">
            <li><a href="https://www.bokadirekt.se/places/kornets-halso-spa-5162" target="_blank" rel="noopener noreferrer">Boka tid på Bokadirekt</a></li>
            <li><a href="https://www.aseaglobal.com/sv-SE?webSiteName=sofiaknutsjohansson" target="_blank" rel="noopener noreferrer">Min ASEA-sida</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h2 className="footer-heading">Kontakt</h2>
          <ul className="footer-list">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Fatbursgatan 18A<br/>118 54, Stockholm</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:0708912510">070-891 25 10 (Sms/Ring)</a>
            </li>
          </ul>
        </div>

        <div className="footer-col hours-col">
          <h2 className="footer-heading">Öppettider</h2>
          <ul className="footer-list">
            <li>
              <span className="day">Mån - Tis:</span>
              <span className="time">Stängt</span>
            </li>
            <li>
              <span className="day">Ons - Tor:</span>
              <span className="time">08:00 - 20:00</span>
            </li>
            <li>
              <span className="day">Fre - Sön:</span>
              <span className="time">Stängt</span>
            </li>
          </ul>
        </div>

        <div className="footer-col map-col">
          <div className="footer-map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.7877237375267!2d18.066495216071727!3d59.31343798165389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fa09d05a9d%3A0x673010b9914df1be!2sFatbursgatan%2018A%2C%20118%2054%20Stockholm!5e0!3m2!1ssv!2sse!4v1715424021234!5m2!1ssv!2sse" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Karta till Kornets Hälso Spa"
            ></iframe>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kornets Hälso Spa. Alla rättigheter förbehållna.</p>
        <p className="f-skatt">Godkänd för F-skatt.</p>
      </div>
    </footer>
  )
}

export default Footer
