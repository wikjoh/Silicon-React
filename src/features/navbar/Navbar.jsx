import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
            </ul>
          </nav>
        </div>
        
        <div className="navbar-right flex">
          {/* <!-- Labels for toggling darkmode.
          The label that doesn't correspond to users preffered scheme will be hidden.  --> */}
          <div className="theme-toggle-switches flex">
            <span className="dm-text" aria-hidden="true">Dark mode</span>
            
            <label id="label-darkmode-switch-whitebg" htmlFor="darkmode-switch-whitebg" className="dm-toggle-switch">
              <span className="dmswitchbg"></span>
            </label>
            <label id="label-darkmode-switch-darkbg" htmlFor="darkmode-switch-darkbg" className="dm-toggle-switch">
              <span className="dmswitchbg"></span>
            </label>

            <span className="dm-chbox-hidden debug">prefers-color-scheme-light-box</span>
            <input id="darkmode-switch-whitebg" className="darkmode-checkboxes visually-hidden" type="checkbox" aria-label="Enable darkmode" />
            <span className="dm-chbox-hidden debug">prefers-color-scheme-dark-box</span>
            <input id="darkmode-switch-darkbg" className="darkmode-checkboxes visually-hidden" type="checkbox" checked aria-label="Enable darkmode" />
          </div>
          
          <a id="signin-button" className="btn-primary btn-signin" href="#">
            <img className="usericon" src="/icons/signupbuttonusericon.svg" alt="" />
            <span>Sign in / up</span>
          </a>
          
          <div className="btn-burger">
            <label htmlFor="burger-toggle">
              <div className="burger-menu-open"><FontAwesomeIcon icon="fa-bars" /></div>
              <div className="burger-menu-close"><FontAwesomeIcon icon="fa-xmark" /></div>
            </label>
          </div>
          <input type="checkbox" id="burger-toggle" className="visually-hidden" aria-label="Toggle open main menu" />
        </div>
      </div>
      
      {/* <!-- Hidden in desktop --> */}
      <div id="burger-menu" className="burger-menu">
        {/* <!-- Since I'm doing this without JS and can't delay applyning display:none until after transform,
        **  in order to maintain proper animated closing of menu when putting display:none to hide elements from accessibility tree,
        **  duplicate the nav-element and reveal the one with aria-hidden attributes when closing the menu. --> */}
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
    </header>
  )
}
export default Navbar