import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DarkmodeToggle from "./components/DarkmodeToggle"
import SigninButton from "./components/SigninButton"
import BurgerButton from "./components/BurgerButton"
import BurgerMenu from "./components/BurgerMenu"

const Navbar = () => {
  return (
    <header id="nav">
      <a href="#main-content" className="jump-to-main">Jump to main content</a>
      <div className="main-navbar wrapper">
        <div className="navbar-left flex">
          <a className="logo" href="/" aria-current="page">
            <img className="logo-img" src="/images/logo-bgdark.svg" alt="Silicon Logotype" />
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
          <BurgerButton />

          <input type="checkbox" id="burger-toggle" className="visually-hidden" aria-label="Toggle open main menu" /> {/* Temp */}
        </div>
      </div>
      
      <BurgerMenu /> {/* <!-- Hidden in desktop --> */}
    </header>
  )
}
export default Navbar