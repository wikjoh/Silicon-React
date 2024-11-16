import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const TwitterSvg = () => {

  const { darkmode } = useContext(ThemeContext)
  const [hovered, setHovered] = useState(false)

  return (
    <svg
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{cursor: "pointer"}}
      width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="6" fill={`${darkmode ? 'rgb(23, 27, 37)' : '#EFF2FC'}`} style={{fill: hovered ? "var(--color-primary)" : "", transition: "var(--transition-default)"}}/>
      <path d="M28.3607 18.6641C28.3715 18.81 28.3715 18.955 28.3715 19.1C28.3715 23.5375 24.994 28.6508 18.8215 28.6508C16.9198 28.6508 15.1532 28.1 13.6665 27.1433C13.9365 27.1741 14.1965 27.185 14.4773 27.185C16.0465 27.185 17.4907 26.655 18.6448 25.7508C17.169 25.72 15.9323 24.7533 15.5057 23.4233C15.7132 23.4541 15.9215 23.475 16.1398 23.475C16.4407 23.475 16.7432 23.4333 17.024 23.3608C15.4848 23.0491 14.3323 21.6983 14.3323 20.0666V20.025C14.7798 20.2741 15.299 20.43 15.849 20.4508C14.9448 19.8491 14.3523 18.82 14.3523 17.6558C14.3523 17.0325 14.5182 16.4608 14.809 15.9625C16.4615 17.9983 18.9457 19.3291 21.7307 19.475C21.679 19.225 21.6473 18.9658 21.6473 18.7058C21.6473 16.8558 23.144 15.3491 25.004 15.3491C25.9707 15.3491 26.8432 15.7541 27.4565 16.4091C28.2148 16.2633 28.9415 15.9825 29.5865 15.5983C29.3373 16.3775 28.8065 17.0325 28.1107 17.4483C28.7865 17.375 29.4415 17.1883 30.0432 16.9283C29.5865 17.5933 29.0157 18.1858 28.3607 18.6641Z" fill={`${darkmode ? 'white' : '#33354D'}`} style={{fill: hovered ? "white" : "", transition: "var(--transition-default)"}}/>
    </svg>
  )
}
export default TwitterSvg