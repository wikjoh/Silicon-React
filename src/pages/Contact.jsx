import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import SectionContact from '../features/section-contact/SectionContact'

import styles from './Contact.module.css'

const Contact = () => {

  return (
    <section style={{ backgroundColor: "var(--color-how-bg)" }}>
      <div className={`wrapper ${styles.contactContainer}`}>
        <Breadcrumb />
        <main>
          <SectionContact />
        </main>
      </div>
    </section>
  )
}
export default Contact