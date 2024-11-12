import { Link } from 'react-router-dom'
import styles from './ContactCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = ({ title, text, url, urlText, icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.iconImgContainer}>
          <img className={styles.iconImg} src={icon} alt="" />
        </div>
      </div>
      <div className="container-right">
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
        <Link className={styles.url} to={url}> {urlText} {<FontAwesomeIcon icon="fa-arrow-right" style={{ marginLeft: ".75rem"}} />} </Link>
      </div>
    </div>
  )
}
export default ContactCard