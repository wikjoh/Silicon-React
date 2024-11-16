import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const YoutubeSvg = () => {

  const { darkmode } = useContext(ThemeContext)
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{cursor: "pointer"}}
      width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="6" fill={`${darkmode ? 'rgb(23, 27, 37)' : '#EFF2FC'}`} style={{fill: hovered ? "var(--color-primary)" : "", transition: "var(--transition-default)"}}/>
      <path d="M29.994 18.0026C29.8023 17.2876 29.2398 16.7234 28.5256 16.5309C27.2206 16.1726 21.9998 16.1668 21.9998 16.1668C21.9998 16.1668 16.7798 16.1609 15.474 16.5034C14.774 16.6943 14.1956 17.2709 14.0023 17.9851C13.6581 19.2901 13.6548 21.9968 13.6548 21.9968C13.6548 21.9968 13.6515 24.7168 13.9931 26.0084C14.1848 26.7226 14.7473 27.2868 15.4623 27.4793C16.7806 27.8376 21.9873 27.8434 21.9873 27.8434C21.9873 27.8434 27.2081 27.8493 28.5131 27.5076C29.2265 27.3159 29.7915 26.7526 29.9856 26.0384C30.3306 24.7343 30.3331 22.0284 30.3331 22.0284C30.3331 22.0284 30.3498 19.3076 29.994 18.0026ZM20.3298 24.5043L20.334 19.5043L24.6731 22.0084L20.3298 24.5043Z" fill={`${darkmode ? 'white' : '#33354D'}`} style={{fill: hovered ? "white" : "", transition: "var(--transition-default)"}}/>
    </svg>
  )
}
export default YoutubeSvg