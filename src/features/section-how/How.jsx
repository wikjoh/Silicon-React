import HowImages from "./components/HowImages"
import ImageDescriptions from "./components/ImageDescriptions"

const How = () => {
  return (
    <section id="how">
      <div className="how-container wrapper">
        <h2>How Does It Work?</h2>

        <HowImages />
        <ImageDescriptions />
        
      </div>
    </section>
  )
}
export default How