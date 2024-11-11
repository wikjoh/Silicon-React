import DarkmodeToggle from "./components/DarkmodeToggle"
import SigninButton from "./components/SigninButton"
import BurgerButton from "./components/BurgerButton"
import BurgerMenu from "./components/BurgerMenu"
import { useState } from "react"
import './Navbar.css'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

  const [burgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen(prevState => !prevState)
    console.log(burgerOpen)
  }

  return (
    <header id="nav" data-burger-open={burgerOpen}>
      <a href="#main-content" className="jump-to-main">Jump to main content</a>
      <div className="main-navbar wrapper">
        <div className="navbar-left flex">
          <Link to="/" className="logo" aria-current="page">
            <img className="logo-img" src="/images/logo-bglight.svg" alt="Silicon Logotype" />
          </Link>
          
          <nav id="navbar-links" className="navbar-links">
            <ul>
              <li><NavLink to="/" className="navbar-link">Features</NavLink></li>
              <li><NavLink to="/Contact" className="navbar-link">Contact</NavLink></li>
            </ul>
          </nav>
        </div>
        
        <div className="navbar-right flex">
          <DarkmodeToggle />
          <SigninButton />
          <BurgerButton toggleBurger={toggleBurger} /> {/* <!-- Hidden in desktop --> */}
        </div>
      </div>
      
      <BurgerMenu toggleBurger={toggleBurger} /> {/* <!-- Hidden in desktop --> */}
    </header>
  )
}
export default Navbar