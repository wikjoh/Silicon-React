import FacebookSvg from '../../components/dynamic-svgs/socials/FacebookSvg'
import InstagramSvg from '../../components/dynamic-svgs/socials/InstagramSvg'
import TwitterSvg from '../../components/dynamic-svgs/socials/TwitterSvg'
import YoutubeSvg from '../../components/dynamic-svgs/socials/YoutubeSvg'
import styles from './Address.module.css'
import AddressCard from './components/addresscard/AddressCard'
import Map from './components/map/Map'

const Address = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mapContainer}>
      <Map />
      </div>
        <div className={styles.cardContainer}>
          <div className={styles.card1}>
            <AddressCard  title='Medical Center 1' address='4517 Washington Ave. Manchester, Kentucky 39495' phoneNumber='(406) 555-0120' monFriHours='9:00 am – 22:00 am' satSunHours='9:00 am – 20:00 am' />
          </div>
          <div className={styles.card2}>
            <AddressCard  title='Medical Center 2' address='2464 Royal Ln. Mesa, New Jersey 45463' phoneNumber='(406) 544-0123' monFriHours='9:00 am – 22:00 am' satSunHours='9:00 am – 20:00 am' />
          </div>
        </div>
        <div className={styles.socialsContainer}>
          <a href="https://www.facebook.com"><FacebookSvg /></a>
          <a href="https://www.twitter.com"><TwitterSvg /></a>
          <a href="https://www.instagram.com"><InstagramSvg /></a>
          <a href="https://www.youtube.com"><YoutubeSvg /></a>
        </div>
    </div>
  )
}
export default Address



