import './styles/AseaSection.css'

function AseaSection() {
  return (
    <section id="asea" className="asea-section">
      <div className="asea-container">
        <div className="asea-content">
          <h2 className="asea-heading">Unik inriktning med cellulär intelligens</h2>
          <p className="asea-text">
            Som en naturlig övergång till min kompletterande verksamhet har jag djupgående kunskap kring och användning av produkter med banbrytande cellulär intelligens. Denna teknologi hjälper till att optimera cellernas naturliga återhämtning och reparation inifrån och ut.
          </p>
          <p className="asea-text">
            Produkterna jag använder och rekommenderar är helt doftfria, GMO-fria, naturliga och 100% säkra. Vid obehag och för snabbare återhämtning rekommenderar jag starkt produkter som RedoxGold.
          </p>
          <div className="asea-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1222127241"
              title="ASEA introduktionsfilm"
              className="asea-video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <a href="https://www.aseaglobal.com/sv-SE?webSiteName=sofiaknutsjohansson" target="_blank" rel="noopener noreferrer" className="asea-cta-btn">
            Läs mer och beställ på min ASEA-sida
          </a>
        </div>
      </div>
    </section>
  )
}

export default AseaSection
