import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Navbar from "../features/navbar/Navbar"
import Footer from "../features/footer/Footer"

const Contact = () => {

  const { darkmode } = useContext(ThemeContext)

  return (
    <div className="themewrapper" data-darkmode={darkmode}>
      <Navbar />
      <p>content</p>
      <Footer />
    </div>
  )
}
export default Contact