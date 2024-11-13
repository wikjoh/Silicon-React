import { useState } from 'react'
import styles from './ConsultationForm.module.css'

const ConsultationForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [specialist, setSpecialist] = useState('')

  return (
    <div className={styles.formWrapper}>
      <h2>Get Online Consultation</h2>

      <form className={styles.form}>
        <label>Full name</label>
        <input type="text" />

        <label>Email address</label>
        <input type="text" />

        <label>Specialist</label>
        <select name="specialist" value={specialist} onChange={(e) => setSpecialist(e.target.value)}>
          <option value="" disabled hidden></option>
          <option value="technician">Tech support</option>
          <option value="financials">Financials</option>
          <option value="marketing">Marketing</option>
        </select>

      </form>
    </div>
  )
}
export default ConsultationForm