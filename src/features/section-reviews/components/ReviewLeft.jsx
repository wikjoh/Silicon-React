const ReviewLeft = () => {
  return (
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
  )
}
export default ReviewLeft