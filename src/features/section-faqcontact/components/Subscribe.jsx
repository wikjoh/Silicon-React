const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="cta">
        <img src="/icons/subscribe-bellicon.svg" alt="Notification bell." />
        <h2>Subscribe to our newsletter</h2>
        <h2 className="desktop-text">Subscribe to our newsletter to stay informed about latest updates</h2>
      </div>
      
      <div className="email-form">
        <form action="#" method="post" id="subscribe-email-form" name="subscribe-email-form">
          <label htmlFor="email"></label>
          <div className="input-container">
            <img className="mail-icon" src="/icons/subscribe-mailicon.svg" alt="" />
            <input type="email" id="email" placeholder="Your email" required />
            <button className="btn-primary btn-subscribe">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Subscribe