import React, { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './features/navbar/Navbar'
import Footer from './features/footer/Footer'





function App() {

  const { darkmode } = useContext(ThemeContext)

  return (
      <BrowserRouter>
        <div className="themewrapper" data-darkmode={darkmode}>
          <Navbar />
          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
  )
}

export default App
