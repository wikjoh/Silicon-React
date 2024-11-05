import DarkmodeToggle from "./components/DarkmodeToggle"
import SigninButton from "./components/SigninButton"
import BurgerButton from "./components/BurgerButton"
import BurgerMenu from "./components/BurgerMenu"
import { useState } from "react"
import './Navbar.css'

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
          <a className="logo" href="/" aria-current="page">
            <img className="logo-img" src="/images/logo-bglight.svg" alt="Silicon Logotype" />
          </a>
          
          <nav id="navbar-links" className="navbar-links">
            <ul>
              <li><a className="navbar-link" href="#">Features</a></li>
              <li><a className="navbar-link" href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="navbar-right flex">
          <DarkmodeToggle />
          <SigninButton />
          <BurgerButton toggleBurger={toggleBurger} /> {/* <!-- Hidden in desktop --> */}
        </div>
      </div>
      
      <BurgerMenu /> {/* <!-- Hidden in desktop --> */}
    </header>
  )
}
export default Navbar