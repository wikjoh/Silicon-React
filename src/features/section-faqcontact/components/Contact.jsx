import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Contact = () => {
  return (
    <div className="contact">
          <button className="btn-contact btn-primary">Contact us now</button>
          <div className="contact-cards">
            <div className="phone-card contact-card">
              <i className="cc-icon phone-color"><FontAwesomeIcon icon="fa-phone-volume" /></i>
              <p className="card-text">Still have questions?</p>
              <a className="phone-color" href="tel:123456789">Contact us <FontAwesomeIcon icon="fa-arrow-right" /></a>
            </div>

            <div className="chat-card contact-card">
              <i className="cc-icon chat-color"><FontAwesomeIcon icon="fa-comment-dots" /></i>
              <p className="card-text">Don't like phone calls?</p>
              <a className="chat-color" href="#">Contact us <FontAwesomeIcon icon="fa-arrow-right" /></a>
            </div>
          </div>
        </div>
  )
}
export default Contact