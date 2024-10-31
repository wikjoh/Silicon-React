const Reviews = () => {
  return (
    <section id="reviews">
      {/* <!-- Only in desktop --> */}
      <div className="reviews-container wrapper">
        <h2>Clients are<br />Loving Our App</h2>

          <div className="review left">
            <img className="img-quote-icon" src="/icons/quote-icon.svg" alt="" />
            <blockquote>
              <img src="/icons/rating-4of5.svg" alt="4 out of 5 stars" />
              <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
            </blockquote>
            <footer className="author">
              <div className="author-img">
                <img src="/images/desktop/review-author-female.png" alt="Picture of Fannie" />
              </div>
              <div className="author-details">
                <p className="author-name">Fannie Summers</p>
                <p className="author-role">Designer</p>
              </div>
            </footer>
          </div>

          <div className="review right">
            <img className="img-quote-icon" src="/icons/quote-icon.svg" alt="" />
            <blockquote>
              <img src="/icons/rating-5of5.svg" alt="5 out of 5 stars" />
              <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
            </blockquote>
            <footer className="author">
              <div className="author-img">
                <img src="/images/desktop/review-author-male.png" alt="Picture of Albert" />
              </div>
              <div className="author-details">
                <p className="author-name">Albert Flores</p>
                <p className="author-role">Developer</p>
              </div>
            </footer>
          </div>
        </div>
    </section>
  )
}
export default Reviews