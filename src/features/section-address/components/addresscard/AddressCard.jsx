import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import styles from './AddressCard.module.css'

const AddressCard = ({ title, address, phoneNumber, monFriHours, satSunHours }) => {
  return (
    <>
      <h2>{title}</h2>

      <ul className={styles.cardUl}>
        <li><img src="./icons/location-icon.svg" /><span>{ address }</span></li>
        <li><img src="./icons/phone-icon.svg" /><span>{ phoneNumber }</span></li>
        <li><img src="./icons/clock-icon.svg" /><div className={styles.openHours}>
            <p><span className={styles.bold}>Mon - Fri:</span> {monFriHours}</p>
            <p><span className={styles.bold}>Sat - Sun:</span> {satSunHours}</p>
          </div></li>
      </ul>
    </>
  )
}
export default AddressCard