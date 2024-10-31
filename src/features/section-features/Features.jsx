const Features = () => {
  return (
    <section id="features">
      <div className="features-container wrapper">
        
        <div className="brandlogo-container" aria-label="Brands that endorse our app">
          <div className="brandlogo">
            <img className="brandlogo-img" src="/images/brand-logos/logoipsum-1.svg" alt="Brand1" />
          </div>

          <div className="brandlogo">
            <img className="brandlogo-img" src="/images/brand-logos/logoipsum-2.svg" alt="Brand2" />
          </div>

          <div className="brandlogo">
            <img className="brandlogo-img" src="/images/brand-logos/logoipsum-3.svg" alt="Brand3" />
          </div>

          <div className="brandlogo">
            <img className="brandlogo-img" src="/images/brand-logos/logoipsum-4.svg" alt="Brand4" />
          </div>

          <div className="brandlogo desktop-only">
            <img className="brandlogo-img" src="/images/brand-logos/logoipsum-5.svg" alt="Brand5" />
          </div>

          <div className="brandlogo desktop-only">
            <img className="brandlogo-img" src="/images/brand-logos/logoipsum-6.svg" alt="Brand6" />
          </div>
        </div>


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
            
            <div className="feature-cards">
              <div className="easy card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/easypayments.svg" alt="" />
                </div>
                <div className="cardtext">
                  <h3>Easy Payments</h3>
                  <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                </div>
              </div>

              <div className="data card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/datasecurity.svg" alt="" />
                </div>
                <div className="cardtext">
                  <h3>Data Security</h3>
                  <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                </div>
              </div>

              <div className="cost card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/coststatistics.svg" alt="" />
                </div>
                <div className="cardtext">
                  <h3>Cost Statistics</h3>
                  <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                </div>
              </div>

              <div className="support card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/support247.svg" alt="" />
                </div>
                <div className="cardtext">
                  <h3>Support 24/7</h3>
                  <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                </div>
              </div>

              <div className="regular card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/regularcashback.svg" alt="" />
                </div>
                <div className="cardtext">
                  <h3>Regular Cashback</h3>
                  <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                </div>
              </div>

              <div className="top card">
                <div className="card-img-container">
                  <img src="/icons/appfeatureicons/topstandards.svg" alt="" />
                </div>
                <div className="cardtext">
                  <h3>Top Standards</h3>
                  <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features