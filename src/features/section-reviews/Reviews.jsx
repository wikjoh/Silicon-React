import { useState, useEffect } from "react"
import Review from "./components/Review"

const Reviews = () => {

  const [reviewsData, setReviewsData] = useState([])

  const fetchReviews = async () => {
    try {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
      if (!res.ok) throw new Error("Response not OK");
      
      const data = await res.json();
      setReviewsData(data)
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  return (
    <section id="reviews">
      {/* <!-- Only in desktop --> */}
      <div className="reviews-container wrapper">
        <h2>Clients are<br />Loving Our App</h2>
        { reviewsData.length > 0 && (
          <>
            <div className="review left">
              <Review key={reviewsData[0].id} author={reviewsData[0].author} jobRole={reviewsData[0].jobRole} starRating={reviewsData[0].starRating} avatarUrl={reviewsData[0].avatarUrl} comment={reviewsData[0].comment} />
            </div>
            <div className="review right">
              <Review key={reviewsData[1].id} author={reviewsData[1].author} jobRole={reviewsData[1].jobRole} starRating={reviewsData[1].starRating} avatarUrl={reviewsData[1].avatarUrl} comment={reviewsData[1].comment} />
            </div>
          </>
        )}

        </div>
    </section>
  )
}
export default Reviews