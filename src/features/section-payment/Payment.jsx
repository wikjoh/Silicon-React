import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Payment = () => {
  return (
    <section id="payment">
      {/* <!-- Only in desktop --> */}
      <div className="payment-container wrapper">
        <div className="transfer-text">
            <h2>Make your money<br />transfer simple and clear</h2>
            <ul>
              <li><img src="/icons/checkmarkercircle.svg" alt="" />Banking transactions are free for you</li>
              <li><img src="/icons/checkmarkercircle.svg" alt="" />No monthly cash commission</li>
              <li><img src="/icons/checkmarkercircle.svg" alt="" />Manage payments and transactions online</li>
            </ul>

            <a className="btn-learn-more btn-primary" href="#">
              <span>Learn more <FontAwesomeIcon icon="fa-arrow-right" /> </span>
            </a>
          </div>

          <div className="img-container top">
            <img className="img-transfer back" src="/images/desktop/payment-transfer-back.png" alt="" />
            <img className="img-transfer front" src="/images/desktop/payment-transfer-front.png" alt="Graph showing account balance over time." />
          </div>

          <div className="img-container bottom">
            <img className="img-payment back" src="/images/desktop/payment-receive-back.png" alt="" />
            <img className="img-payment front" src="/images/desktop/payment-receive-card.png" alt="App contacts list." />
          </div>

          <div className="payment-text">
            <h2>Receive payment from<br />international bank details</h2>
            <div className="cards">
              <div className="card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/easypayments.svg" alt="" />
                </div>
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>

              <div className="card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/regularcashback.svg" alt="" />
                </div>
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>

            <a className="btn-learn-more btn-primary" href="#">
              <span>Learn more <FontAwesomeIcon icon="fa-arrow-right" /> </span>
            </a>
          </div>
      </div>
    </section>
  )
}
export default Payment