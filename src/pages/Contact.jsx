import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FacebookSvg from '../components/dynamic-svgs/socials/FacebookSvg'
import InstagramSvg from '../components/dynamic-svgs/socials/InstagramSvg'
import TwitterSvg from '../components/dynamic-svgs/socials/TwitterSvg'
import YoutubeSvg from '../components/dynamic-svgs/socials/YoutubeSvg'
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

      <section id="address" style={{ backgroundColor: "var(--color-how-faqbg)", marginBottom: "5rem" }}>
        <div className={`wrapper ${styles.addressContainer}`}>
            <Address />
        </div>
      </section>
    </>
  )
}
export default Contact