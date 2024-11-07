import ReviewStars from "./ReviewStars"

const Review = ({ author, jobRole, starRating, avatarUrl, comment}) => {
  return (
    <div className="review left">
      <img className="img-quote-icon" src="/icons/quote-icon.svg" alt="" />
      <blockquote>
        <ReviewStars starRating={starRating} />
        <p>{comment}</p>
      </blockquote>
      <footer className="author">
        <div className="author-img">
          <img src={avatarUrl} alt={`Picture of ${author}`} />
        </div>
        <div className="author-details">
          <p className="author-name">{author}</p>
          <p className="author-role">{jobRole}</p>
        </div>
      </footer>
    </div>
  )
}
export default Review