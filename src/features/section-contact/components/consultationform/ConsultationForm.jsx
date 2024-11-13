import { useState } from 'react'
import styles from './ConsultationForm.module.css'
import Button from '../../../../components/button/Button'

const ConsultationForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [specialist, setSpecialist] = useState('')

  const handleSubmit = () => {
    console.log('test');
  }

  return (
    <div className={styles.formWrapper}>
      <h2>Get Online Consultation</h2>

      <form className={styles.form}>
        <label>Full name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Email address</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Specialist</label>
        <select name="specialist" value={specialist} onChange={(e) => setSpecialist(e.target.value)}>
          <option value="" disabled hidden></option>
          <option value="technician">Tech support</option>
          <option value="financials">Financials</option>
          <option value="marketing">Marketing</option>
        </select>

        <div className={styles.submitButton}>
          <Button
            buttonText='Make an appointment'
            textColor='var(--color-white)'
            bgColor='var(--color-primary)'
            onClick={ handleSubmit }
          />
        </div>
      </form>
    </div>
  )
}
export default ConsultationForm