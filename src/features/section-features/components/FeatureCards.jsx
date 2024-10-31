const FeatureCards = () => {
  return (
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
  )
}
export default FeatureCards