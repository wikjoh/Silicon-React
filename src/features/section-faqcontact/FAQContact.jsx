import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Contact from "./components/Contact"
import FAQ from "./components/FAQ"
import Subscribe from "./components/Subscribe"

const FAQContact = () => {
  return (
    <section id="faq-contact">
      <div className="faq-contact-container wrapper">
        <header className="header">
          <h2 className="headline tac">Any questions?<br />Check out the FAQs</h2>
          <p className="getintouch-text tac">Still have unanswered questions and need to get in touch?</p>
        </header>
        <FAQ />
        <Contact />
        <Subscribe />
      </div>
    </section>
  )
}
export default FAQContact