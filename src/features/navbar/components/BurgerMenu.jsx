const BurgerMenu = () => {
  return (
    <div id="burger-menu" className="burger-menu">
      <nav className="burger-nav hide-aria" aria-hidden="true">
        <ul>
          <li>
            <a className="btn-primary btn-signin" href="#" tabIndex="-1">
              <img className="usericon" src="/icons/signupbuttonusericon.svg" alt="" />
              <span>Sign in / up</span>
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#" tabIndex="-1">Features</a>
          </li>
        </ul>
      </nav>
      <nav className="burger-nav reveal-aria">
        <ul>
          <li>
            <a className="btn-primary btn-signin" href="#">
              <img className="usericon" src="/icons/signupbuttonusericon.svg" alt="" />
              <span>Sign in / up</span>
            </a>
          </li>
          <li>
            <a className="navbar-link" href="#">Features</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default BurgerMenu