const FAQContact = () => {
  return (
    <section id="faq-contact">
      <div className="faq-contact-container wrapper">
        <header className="header">
          <h2 className="headline tac">Any questions?<br />Check out the FAQs</h2>
          <p className="getintouch-text tac">Still have unanswered questions and need to get in touch?</p>
        </header>

        <div className="faq-accordion">
          <details open>
            <summary className="question">
              <span>Is any of my personal information stored in the App?</span>
              <label className="btn-chevron chevron-faq"></label>
            </summary>
            <div className="answer">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
              <p>Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
            </div>
          </details>

          <details>
            <summary className="question">
              <span>What formats can I download my transaction history in?</span>
              <label className="btn-chevron chevron-faq"></label>
            </summary>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi amet animi nobis officiis. Alias laboriosam, quam aut iusto pariatur nihil atque aliquam! Enim vero provident impedit perspiciatis nulla sit corrupti mollitia voluptatem sapiente atque possimus, distinctio nostrum cum veniam rem, ipsum obcaecati dolore? Quisquam nemo delectus pariatur dolor numquam?</p>
            </div>
          </details>

          <details>
            <summary className="question">
              <span>Can I schedule future transfers?</span>
              <label className="btn-chevron chevron-faq"></label>
            </summary>
            <div className="answer">
              <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
            </div>
          </details>

          <details>
            <summary className="question">
              <span>When can I use Banking App services?</span>
              <label className="btn-chevron chevron-faq"></label>
            </summary>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum enim nam ea neque amet in magni esse assumenda, quasi tempora debitis totam obcaecati laboriosam veritatis ipsa quae maxime impedit incidunt rerum aut perferendis distinctio temporibus! Vitae repellat id provident non saepe recusandae dicta voluptate, nesciunt consectetur officiis! Beatae, nihil nulla?</p>
            </div>
          </details>

          <details>
            <summary className="question">
              <span>Can I create my own password that is easy for me to remember?</span>
              <label className="btn-chevron chevron-faq"></label>
            </summary>
            <div className="answer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid beatae veritatis magnam reiciendis numquam porro corrupti et tenetur quis. Blanditiis totam cupiditate eum architecto aspernatur harum, vel temporibus. Ut facere, sapiente quis, perspiciatis sint ex nesciunt deserunt quisquam consectetur consequuntur necessitatibus et. Voluptatibus velit, voluptatem accusantium necessitatibus minus illum expedita.</p>
            </div>
          </details>

          <details>
            <summary className="question">
              <span>What happens if I forget or lose my password?</span>
              <label className="btn-chevron chevron-faq"></label>
            </summary>
            <div className="answer">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid beatae veritatis magnam reiciendis numquam porro corrupti et tenetur quis. Blanditiis totam cupiditate eum architecto aspernatur harum, vel temporibus. Ut facere, sapiente quis, perspiciatis sint ex nesciunt deserunt quisquam consectetur consequuntur necessitatibus et. Voluptatibus velit, voluptatem accusantium necessitatibus minus illum expedita.</p>
            </div>
          </details>            
        </div>

        <div className="contact">
          <button className="btn-contact btn-primary">Contact us now</button>
          <div className="contact-cards">
            <div className="phone-card contact-card">
              <i className="fa-solid fa-phone-volume cc-icon phone-color"></i>
              <p className="card-text">Still have questions?</p>
              <a className="phone-color" href="tel:123456789">Contact us<i className="fa-solid fa-arrow-right"></i></a>
            </div>

            <div className="chat-card contact-card">
              <i className="fa-solid fa-comment-dots cc-icon chat-color"></i>
              <p className="card-text">Don't like phone calls?</p>
              <a className="chat-color" href="#">Contact us<i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </div>

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
      </div>
    </section>
  )
}
export default FAQContact