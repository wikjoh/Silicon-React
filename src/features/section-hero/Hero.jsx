const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container wrapper">
        <h1 className="headline">Manage All Your<br />Money in One App</h1>

        <div className="content">
          <p className="pitch">
            We offer you a new generation of the mobile banking. <br className="paragraph-splitter" /> Save, spend & manage money in your pocket.
          </p>

          <div className="dlbuttons">
            <a className="btn-dl btn-appstore" href="#"><img className="btn-apple-img" src="/images/appstorebadges/appstore-light.svg" alt="Apple Appstore download button" /></a>
            <a className="btn-dl btn-googleplay" href="#"><img className="btn-google-img" src="/images/appstorebadges/googleplay-light.svg" alt="Google Play download button" /></a>
          </div>

          <div className="discover-more-container">
            <a className="discover-more" href="#features">
              <label className="btn-chevron chevron-discovermore"></label>
              <span>Discover more</span>
            </a>
          </div>
        </div>

        {/* <!-- In CSS, only show images for respective platform --> */}
        <div className="hero-images">
          <img className="hero-img-shadow tablet" src="/images/tablet/hero-shadow.png" alt="" />
          <img className="hero-img-back tablet" src="/images/tablet/hero-back.png" alt="" />
          <img className="hero-img-front tablet" src="/images/tablet/hero-front.png" alt="An image of two overlapping phones with the Silicon app, one displaying transaction features, the other budgeting." />
          <img className="hero-img-shadow desktop" src="/images/desktop/hero-shadow.png" alt="" />
          <img className="hero-img-back desktop" src="/images/desktop/hero-back.png" alt="" />
          <img className="hero-img-front desktop" src="/images/desktop/hero-front.png" alt="An image of two overlapping phones with the Silicon app, one displaying transaction features, the other budgeting." />
        </div>
      </div>
    </section>
  )
}
export default Hero