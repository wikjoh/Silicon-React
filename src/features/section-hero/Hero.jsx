import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HeroImages from "./components/HeroImages"
import DiscoverMore from "./components/DiscoverMore"
import AppDlButtons from "./components/AppDlButtons"

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container wrapper">
        <h1 className="headline">Manage All Your<br />Money in One App</h1>

        <div className="content">
          <p className="pitch">
            We offer you a new generation of the mobile banking. <br className="paragraph-splitter" /> Save, spend & manage money in your pocket.
          </p>
          <AppDlButtons />
          <DiscoverMore />
        </div>
        <HeroImages />
      </div>
    </section>
  )
}
export default Hero