import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const DarkmodeToggle = () => {

  const { toggleDarkmode } = useContext(ThemeContext)
  
  return (
    <div className="theme-toggle-switches flex">
      <span className="dm-text" aria-hidden="true">Dark mode</span>
      
      <label onClick={(toggleDarkmode)} id="label-darkmode-switch" className="dm-toggle-switch">
        <span className="dmswitchbg"></span>
      </label>

    </div>
  )
}
export default DarkmodeToggle