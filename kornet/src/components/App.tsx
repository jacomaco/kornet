import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import AseaSection from './AseaSection'
import Reviews from './Reviews'
import Footer from './Footer'
import './styles/App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
        <AseaSection />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}

export default App
