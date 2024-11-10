import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Footer from "../features/footer/Footer"
import Navbar from "../features/navbar/Navbar"
import FAQContact from "../features/section-faqcontact/FAQContact"
import Features from "../features/section-features/Features"
import Hero from "../features/section-hero/Hero"
import How from "../features/section-how/How"
import Payment from "../features/section-payment/Payment"
import Reviews from "../features/section-reviews/Reviews"


const Home = () => {

  const { darkmode } = useContext(ThemeContext)

  return (
    <div className="themewrapper" data-darkmode={darkmode}>
      <Navbar />
        <main id="main-content">
          <Hero />
          <Features />
          <How />
          <Payment />
          <Reviews />
          <FAQContact />
        </main>
      <Footer />
    </div>
  )
}
export default Home


