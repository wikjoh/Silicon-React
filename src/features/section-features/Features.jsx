import Brands from "./components/Brands"
import FeatureCards from "./components/FeatureCards"

const Features = () => {
  return (
    <section id="features">
      <div className="features-container wrapper">

        <Brands />

        <div className="content-container">
          <div className="left-content">
            <img className="phone-img" src="/images/desktop/features-phone.png" alt="An image showcasing the transaction features of the app." />
            <img className="card-img" src="/images/desktop/features-card.png" alt="" />
          </div>

          <div className="right-content">
            <header>
              <h2 className="headline">App Features</h2>
              <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </header>
            <FeatureCards />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features