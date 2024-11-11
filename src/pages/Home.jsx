import FAQContact from "../features/section-faqcontact/FAQContact"
import Features from "../features/section-features/Features"
import Hero from "../features/section-hero/Hero"
import How from "../features/section-how/How"
import Payment from "../features/section-payment/Payment"
import Reviews from "../features/section-reviews/Reviews"


const Home = () => {

  return (
    <>
      <Hero />
      <Features />
      <How />
      <Payment />
      <Reviews />
      <FAQContact />
    </>
  )
}
export default Home


