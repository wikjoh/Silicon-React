import ConsultationForm from './components/consultationform/ConsultationForm'
import ContactCard from './components/contactcard/ContactCard'
import styles from './SectionContact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1>Contact Us</h1>
        <div className={styles.emailCard}>
          <ContactCard
            title='Email us'
            text='Please feel free to drop us a line. We will respond as soon as possible.'
            url='#'
            urlText='Leave a message'
            icon='/icons/emailicon.svg'
            />
        </div>
        <div className={styles.careersCard}>
          <ContactCard
            title='Careers'
            text='Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.'
            url='#'
            urlText='Send an application'
            icon='/icons/careeraddicon.svg'
            />
        </div>
      </div>

      <div className={styles.consultationForm}>
        <ConsultationForm/>
      </div>

    </div>
  )
}
export default Contact