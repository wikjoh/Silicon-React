import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FAQItem = ({ title, content }) => {
  return (
    <details name="faq">
      <summary className="question">
        <span>{ title }</span>
        <label className="btn-chevron chevron-faq"><FontAwesomeIcon icon="fa-chevron-down" /></label>
      </summary>
      <div className="answer">
        <p>{ content }</p>
      </div>
    </details>
  )
}
export default FAQItem