import './styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Kornet</div>
      <ul className="navbar-links">
        <li><a href="#home">Hem</a></li>
        <li><a href="#about">Om Sofia</a></li>
        <li><a href="#contact">Kontakt</a></li>
        <li><a href="#treatments">Behandlingar</a></li>
        <li><a href="#reviews">Omdömen</a></li>
        <li><a href="#booking">Boka</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
