import { useState } from "react"
import styles from './Subscribe.module.css'

const Subscribe = () => {

  const [email, setEmail] = useState('')
  const [invalidEmail, setInvalidEmail] = useState(false)
  const [subscribeSuccess, setSubscribeSuccess] = useState(false)
  const [subscribePostError, setSubscribePostError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribeSuccess(false)
    if (validateEmail()) {
      postData(email)
      setEmail('')
    } else {
      setInvalidEmail(true)
    }
  }
  

  const validateEmail = () => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)


  const handleInput = (e) => {
    setEmail(e.target.value)
    setInvalidEmail(false)
    setSubscribeSuccess(false)
    setSubscribePostError(false)
  }

  
  const postData = async (email) => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email})
      });

      if (!res.ok) {
        setSubscribePostError(true)
        throw new Error("Response not OK");
      } else {
        setSubscribeSuccess(true)
      }

    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  return (
    <div className="subscribe">
      <div className="cta">
        <img src="/icons/subscribe-bellicon.svg" alt="Notification bell." />
        <h2>Subscribe to our newsletter</h2>
        <h2 className="desktop-text">Subscribe to our newsletter to stay informed about latest updates</h2>
      </div>
      
      <div className={`email-form ${styles.emailForm}`}>
        <form onSubmit={handleSubmit} id="subscribe-email-form" name="subscribe-email-form" noValidate>
          <label htmlFor="email"></label>
          <div className="input-container">
            <img className="mail-icon" src="/icons/subscribe-mailicon.svg" alt="" />
            <input value={email} onChange={handleInput} type="email" id="email" placeholder="Your email" required />
            <button className="btn-primary btn-subscribe">Subscribe</button>
          </div>
          <div className={styles.formFeedbackDiv}>
            {
              invalidEmail && <p className={`${styles.error} ${styles.feedbackText}`}>Not a valid email address</p>
            }
            {
              subscribeSuccess && <p className={`${styles.subscribeSuccess} ${styles.feedbackText}`}>Thank you for subscribing!</p>
            }
            {
              subscribePostError && <p className={`${styles.error} ${styles.feedbackText}`}>Something went wrong... Please try again.</p>
            }
          </div>
        </form>
      </div>
    </div>
  )
}
export default Subscribe