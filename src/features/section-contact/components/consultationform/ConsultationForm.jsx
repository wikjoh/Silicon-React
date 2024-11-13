import { useState } from 'react'
import styles from './ConsultationForm.module.css'
import Button from '../../../../components/button/Button'

const ConsultationForm = () => {

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: ''})
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const handleChange = (e) => {
    const fieldName = e.target.name
    const { value } = e.target
    setFormData({...formData, [fieldName]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postData(formData)
  }

  const postData = async (data) => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      console.log(res)

      if (!res.ok) {
        setFetchError(true)
        throw new Error("Response not OK");
      } else {
        setSubmitSuccess(true)
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }


  
  if (submitSuccess) {
    return (
      <div className={styles.formWrapper}>
        <div className="successMessage">
          <h2>Thank you for contacting us</h2>
          <p>We'll get back to you as soon as possible</p>
        </div>
      </div>
    )
  } else {
      return (
        <div className={styles.formWrapper}>
        <h2>Get Online Consultation</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Full name</label>
          <input name='fullName' type="text" value={formData.name} onChange={handleChange} />

          <label>Email address</label>
          <input name='email' type="text" value={formData.email} onChange={handleChange} />

          <label>Specialist</label>
          <select name='specialist' value={formData.specialist} onChange={handleChange}>
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
              />
          </div>
        </form>
      </div>
    )
  }
}
export default ConsultationForm