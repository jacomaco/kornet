import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import AseaSection from './AseaSection'
import Reviews from './Reviews'
import Footer from './Footer'
import FadeInSection from './FadeInSection'
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
          <AseaSection />
        </FadeInSection>
        <FadeInSection>
          <Reviews />
        </FadeInSection>
      </main>
      <Footer />
    </>
  )
}

export default App
