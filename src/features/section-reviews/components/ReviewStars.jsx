const ReviewStars = ({ starRating }) => {
  return (
    <>
    {/* Items won't change once rendered, so using index as key prop should be fine */}
    {Array.from({ length: starRating }).map((_, i) => (
      <img key={i} src="/icons/rating-star.svg" alt="" />
    ))}

    {Array.from({ length: (5 - starRating) }).map((_, i) => (
      <img key={i} src="/icons/rating-star-empty.svg" alt="" />
    ))}
    </>
  )
}
export default ReviewStars