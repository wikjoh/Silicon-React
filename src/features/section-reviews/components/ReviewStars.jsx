const ReviewStars = ({ starRating }) => {
  return (
    <>
    {Array.from({ length: starRating }).map((_, i) => (
      <img src="/icons/rating-star.svg" alt="" />
    ))}

    {Array.from({ length: (5 - starRating) }).map((_, i) => (
      <img src="/icons/rating-star-empty.svg" alt="" />
    ))}
    </>
  )
}
export default ReviewStars