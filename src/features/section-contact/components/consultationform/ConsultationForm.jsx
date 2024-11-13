import { useEffect, useState } from 'react'
import styles from './ConsultationForm.module.css'
import Button from '../../../../components/button/Button'

const ConsultationForm = () => {

  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: ''})
  const [formErrors, setFormErrors] = useState({})
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [fetchError, setFetchError] = useState(false)

  const handleChange = (e) => {
    const fieldName = e.target.name
    const { value } = e.target
    setFormData({...formData, [fieldName]: value})


    // Validate form data
    const removeFormError = () => setFormErrors(prevFormErrors => ({...prevFormErrors, [fieldName]: ''}))

    switch (fieldName) {
      case 'fullName':
        if (value.trim().length < 2) {
          setFormErrors(prevFormErrors => ({...prevFormErrors, [fieldName]: 'Needs to be at least 2 characters long'}))
        } else {
          removeFormError()
        }
      break;
      case 'email':
        if (/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value) === false) {
          setFormErrors(prevFormErrors => ({...prevFormErrors, [fieldName]: 'Not a valid email address'}))
        } else {
          removeFormError()
        }
      break;
      case 'specialist':
        if (value === '') {
          setFormErrors(prevFormErrors => ({...prevFormErrors, [fieldName]: 'Must be selected'}))
        } else {
          removeFormError()
        }
      break;
    }
  }

  const formDataValid = () => {

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
        <div className={styles.successMessage}>
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
          <div className={styles.formGroup}>
            <label>Full name</label>
            <input name='fullName' type="text" value={formData.name} onChange={handleChange} />
            {formErrors.fullName && <span>{formErrors.fullName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Email address</label>
            <input name='email' type="text" value={formData.email} onChange={handleChange} />
            {formErrors.email && <span>{formErrors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label>Specialist</label>
            <select required name='specialist' value={formData.specialist} onChange={handleChange}>
              <option value="" disabled hidden></option>
              <option value="technician">Tech support</option>
              <option value="financials">Financials</option>
              <option value="marketing">Marketing</option>
            </select>
            {formErrors.specialist && <span>{formErrors.specialist}</span>}
          </div>

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