import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const FacebookSvg = () => {

  const { darkmode } = useContext(ThemeContext)
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{cursor: "pointer"}}
      width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="6" fill={`${darkmode ? 'rgb(23, 27, 37)' : '#EFF2FC'}`} style={{fill: hovered ? "var(--color-primary)" : "", transition: "var(--transition-default)"}}/>
      <path d="M28.6667 14.5H15.3333C14.8725 14.5 14.5 14.8733 14.5 15.3333V28.6667C14.5 29.1267 14.8725 29.5 15.3333 29.5H22.5125V23.7H20.5642V21.4292H22.5125V19.7625C22.5125 17.825 23.6958 16.7692 25.4292 16.7692C26.0117 16.7675 26.595 16.7975 27.175 16.8583V18.875H25.9792C25.0392 18.875 24.8558 19.3233 24.8558 19.9792V21.425H27.1033L26.8117 23.6958H24.855V29.5H28.6667C29.1275 29.5 29.5 29.1267 29.5 28.6667V15.3333C29.5 14.8733 29.1275 14.5 28.6667 14.5Z" fill={`${darkmode ? 'white' : '#33354D'}`} style={{fill: hovered ? "white" : "", transition: "var(--transition-default)"}}/>
    </svg>
  )
}
export default FacebookSvg