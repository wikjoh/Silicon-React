import { useEffect, useState } from "react"
import HowImages from "./components/HowImages"
import ImageDescriptions from "./components/ImageDescriptions"

const How = () => {

  const [imgOrder, setImgOrder] = useState([1,2,3])

  const shiftRight = (array) => {
    return [...array.slice(1), array[0]];
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setImgOrder((prevOrder) => shiftRight(prevOrder))
    }, 5000);
    return () => clearTimeout(timer);
  }, [imgOrder])


  return (
    <section id="how">
      <div className="how-container wrapper">
        <h2>How Does It Work?</h2>

        <HowImages imgOrder={imgOrder} setImgOrder={setImgOrder} />
        <ImageDescriptions imgOrder={imgOrder} />
        
      </div>
    </section>
  )
}
export default How