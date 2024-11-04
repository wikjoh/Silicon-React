import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import Navbar from './features/navbar/Navbar'
import Hero from './features/section-hero/Hero'
import Features from './features/section-features/Features'
import How from './features/section-how/How'
import Payment from './features/section-payment/Payment'
import Reviews from './features/section-reviews/Reviews'
import FAQContact from './features/section-faqcontact/FAQContact'
import Footer from './features/footer/Footer'




function App() {

  const { darkmode } = useContext(ThemeContext)

  return (
      <div className="themewrapper" data-darkmode={`${darkmode}`}>
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
