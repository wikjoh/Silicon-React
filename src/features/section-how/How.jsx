const How = () => {
  return (
    <section id="how">
      <div className="how-container wrapper">
        <h2>How Does It Work?</h2>

        <div className="images-container" aria-label="A set of images showcasing some features of the app.">
          <div className="img tablet left">
            <img src="/images/tablet/howdoesitwork-left.png" alt="Card transactions." />
          </div>
          <div className="img desktop left">
            <img src="/images/desktop/howdoesitwork-left.png" alt="Budget and spending." />
          </div>
          <div className="img mobile center">
            <img src="/images/mobile/howdoesitwork.png" alt="Money transfers." />
          </div>
          <div className="img tablet center">
            <img src="/images/tablet/howdoesitwork-center.png" alt="Money tranfers." />
          </div>
          <div className="img desktop center">
            <img src="/images/desktop/howdoesitwork-center.png" alt="Card transactions." />
          </div>
          <div className="img tablet right">
            <img src="/images/tablet/howdoesitwork-right.png" alt="Money transfer interface." />
          </div>
          <div className="img desktop right">
            <img src="/images/desktop/howdoesitwork-right.png" alt="Money transfers." />
          </div>
        </div>

        <div className="image-description mobile">
          <h3>Transfers to people from your contact list</h3>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="image-description tablet">
          <h3>Step 3. Transfers to people from your contact list</h3>
          <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
        </div>

        <div className="image-description desktop">
          <h3>Latest transaction history</h3>
          <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum.</p>
        </div>
      </div>
    </section>
  )
}
export default How