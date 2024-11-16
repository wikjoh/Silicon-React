import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Address from '../features/section-address/Address'
import SectionContact from '../features/section-contact/SectionContact'

import styles from './Contact.module.css'

const Contact = () => {

  return (
    <>
      <section id="contact" style={{ backgroundColor: "var(--color-how-bg)" }}>
        <div className={`wrapper ${styles.contactContainer}`}>
          <Breadcrumb />
            <SectionContact />
        </div>
      </section>

      <section id="address" style={{ backgroundColor: "white" }}>
        <div className={`wrapper ${styles.addressContainer}`}>
            <Address />
        </div>
      </section>
    </>
  )
}
export default Contact