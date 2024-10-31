const ReviewRight = () => {
  return (
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
  )
}
export default ReviewRight