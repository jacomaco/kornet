import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Treatments from './Treatments'
import AseaSection from './AseaSection'
import Reviews from './Reviews'
import FAQ from './FAQ'
import Footer from './Footer'
import FadeInSection from './FadeInSection'
import BackToTop from './BackToTop'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Treatments />
        </FadeInSection>
        <FadeInSection>
          <AseaSection />
        </FadeInSection>
        <FadeInSection>
          <Reviews />
        </FadeInSection>
        <FadeInSection>
          <FAQ />
        </FadeInSection>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
