import { Link, NavLink } from "react-router-dom"

const BurgerMenu = ({ toggleBurger }) => {
  return (
    <div id="burger-menu" className="burger-menu">
      <nav className="burger-nav hide-aria" aria-hidden="true">
        <ul>
          <li>
            <Link to="#" onClick={toggleBurger} className="btn-primary btn-signin" tabIndex="-1">
              <img className="usericon" src="/icons/signupbuttonusericon.svg" alt="" />
              <span>Sign in / up</span>
            </Link>
          </li>
          <li>
            <NavLink onClick={toggleBurger} to="/" className="navbar-link" tabIndex="-1">Features</NavLink>
          </li>
          <li>
            <NavLink onClick={toggleBurger} to="/Contact" className="navbar-link" tabIndex="-1">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="burger-nav reveal-aria">
        <ul>
          <li>
            <Link to="#" className="btn-primary btn-signin">
              <img className="usericon" src="/icons/signupbuttonusericon.svg" alt="" />
              <span>Sign in / up</span>
            </Link>
          </li>
          <li>
            <NavLink onClick={toggleBurger} to="/" className="navbar-link" href="#">Features</NavLink>
          </li>
          <li>
            <NavLink onClick={toggleBurger} to="/Contact" className="navbar-link" href="#">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default BurgerMenu