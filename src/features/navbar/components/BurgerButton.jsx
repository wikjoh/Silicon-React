import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BurgerButton = ({ toggleBurger }) => {
  return (
    <div className="btn-burger">
      <label>
      <div onClick={toggleBurger} className="burger-menu-open"><FontAwesomeIcon icon="fa-bars" /></div>
      <div onClick={toggleBurger} className="burger-menu-close"><FontAwesomeIcon icon="fa-xmark" /></div>
    </label>
  </div>
  )
}
export default BurgerButton