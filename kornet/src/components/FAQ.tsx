import { useState } from 'react'
import './styles/FAQ.css'

const faqData = [
  {
    question: 'Kan jag använda mitt friskvårdsbidrag hos dig?',
    answer: 'Ja, jag är ansluten till ePassi, Hälsoresurs och Uggla. Du kan välja friskvårdsmassage direkt i bokningen.'
  },
  {
    question: 'Vad ska jag tänka på innan min massage?',
    answer: 'Kom gärna några minuter före din bokade tid för att hinna varva ner. Undvik tunga måltider direkt före behandlingen.'
  },
  {
    question: 'Får jag ta med mig sällskap?',
    answer: 'Salongen är en plats för lugn och återhämtning, därför ber jag dig komma ensam till din behandling (om du inte bokat en parkurs).'
  },
  {
    question: 'Hur fungerar avbokning?',
    answer: 'Avbokning sker via Bokadirekt senast 24 timmar innan bokad tid. Vid sen avbokning eller uteblivet besök debiteras hela kostnaden.'
  }
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-heading">Vanliga Frågor</h2>
        <div className="faq-accordion">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.question}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  className="faq-question"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  {item.question}
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="faq-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-wrapper"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-answer">
                    <p className="faq-answer-content">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
