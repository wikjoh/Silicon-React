import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import SectionContact from '../features/section-contact/SectionContact'

import styles from './Contact.module.css'

const Contact = () => {

  return (
    <section className="Contact">
      <div className={`wrapper ${styles.contactContainer}`}>
        <Breadcrumb />
        <SectionContact />
      </div>
    </section>
  )
}
export default Contact