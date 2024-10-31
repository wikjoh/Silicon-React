import React from 'react'
import Navbar from './features/navbar/Navbar'
import Hero from './features/section-hero/Hero'
import Features from './features/section-features/Features'
import How from './features/section-how/How'
import Payment from './features/section-payment/Payment'
import Reviews from './features/section-reviews/Reviews'
import FAQContact from './features/section-faqcontact/FAQContact'
import Footer from './features/footer/Footer'



function App() {

  return (
    <div className="themewrapper">
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

export default App
