import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BurgerButton = () => {
  return (
    <div className="btn-burger">
      <label htmlFor="burger-toggle">
      <div className="burger-menu-open"><FontAwesomeIcon icon="fa-bars" /></div>
      <div className="burger-menu-close"><FontAwesomeIcon icon="fa-xmark" /></div>
    </label>
  </div>
  )
}
export default BurgerButton