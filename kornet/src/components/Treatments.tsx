import './styles/Treatments.css'

const treatmentsData = [
  {
    category: 'Friskvård',
    name: 'Klassisk Massage',
    duration: '30 min',
    price: '750 kr',
    description: 'Svensk klassisk massage som hjälper till att lösgöra muskelspänningar efter träning, stress och/eller utebliven återhämtning.'
  },
  {
    category: 'Massage',
    name: 'Spamassage',
    duration: '25 min',
    price: '700 kr',
    description: 'Välgörande, lugn och avslappnande massage för rygg, nacke och axlar. Stressreducerande och cirkulationshöjande.'
  },
  {
    category: 'Ansiktsbehandling',
    name: 'Lyxig Ansiktsbehandling',
    duration: '70 min',
    price: '950 kr',
    description: 'Lyxig ansiktsbehandling med löddrande ansiktstvätt och peeling. Därefter lermask från vulkanisk aska och massage.'
  },
  {
    category: 'Massage',
    name: 'Ekologisk Aromamassage',
    duration: '60 min',
    price: '900 kr',
    description: 'En djupt avslappnande helkroppsmassage från topp till tå som aktiverar kroppens lugn- och rosystem.'
  },
  {
    category: 'Massage',
    name: 'SPA - Chokladmassage',
    duration: '75 min',
    price: '900 kr',
    description: 'Lyxig specialbehandling med helkroppsmassage från topp till tå med chokladmassageolja som verkar lugnande och mjukgörande.'
  },
  {
    category: 'Avspänning',
    name: 'Avspänning med mindfulness',
    duration: '30 min',
    price: '500 kr',
    description: 'Stresshantering med inledande samtal om mental träning och avspänning med mindfulness. Avkoppling för ökad mental hälsobalans.'
  }
]

function Treatments() {
  return (
    <section id="treatments" className="treatments-section">
      <div className="treatments-header">
        <h2 className="treatments-heading">Populära Behandlingar</h2>
        <p className="treatments-subheading">Ett urval av våra mest älskade behandlingar för kropp och själ.</p>
      </div>

      <div className="treatments-marquee-container">
        <div className="treatments-marquee">
          {/* We duplicate the items to create a seamless infinite loop */}
          {[...treatmentsData, ...treatmentsData].map((treatment, index) => (
            <div className="treatment-card" key={index}>
              <div className="treatment-card-header">
                <span className="treatment-category">{treatment.category}</span>
                <span className="treatment-duration">{treatment.duration}</span>
              </div>
              <h3 className="treatment-name">{treatment.name}</h3>
              <p className="treatment-description">{treatment.description}</p>
              <div className="treatment-card-footer">
                <span className="treatment-price">{treatment.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="treatments-action">
        <a href="https://www.bokadirekt.se/places/kornets-halso-spa-5162" target="_blank" rel="noopener noreferrer" className="treatments-btn">
          Se alla behandlingar & Boka tid
        </a>
      </div>
    </section>
  )
}

export default Treatments
