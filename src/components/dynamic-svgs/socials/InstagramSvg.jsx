import { useContext, useState } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const InstagramSvg = () => {

  const { darkmode } = useContext(ThemeContext)
  const [hovered, setHovered] = useState(false)

  return (
    <svg 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{cursor: "pointer"}}
      width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="44" height="44" rx="6" fill={`${darkmode ? 'rgb(23, 27, 37)' : '#EFF2FC'}`} style={{fill: hovered ? "var(--color-primary)" : "", transition: "var(--transition-default)"}}/>
      <path d="M29.4559 18.9208C29.4467 18.29 29.3301 17.6641 29.1067 17.0741C28.7159 16.0666 27.9201 15.27 26.9126 14.88C26.3301 14.6608 25.7142 14.5433 25.0909 14.53C24.2892 14.4941 24.0351 14.4841 22.0001 14.4841C19.9651 14.4841 19.7042 14.4841 18.9084 14.53C18.2859 14.5433 17.6701 14.6608 17.0876 14.88C16.0801 15.27 15.2834 16.0666 14.8934 17.0741C14.6742 17.6566 14.5559 18.2725 14.5442 18.895C14.5084 19.6975 14.4976 19.9516 14.4976 21.9866C14.4976 24.0216 14.4976 24.2816 14.5442 25.0783C14.5567 25.7016 14.6742 26.3166 14.8934 26.9008C15.2842 27.9075 16.0801 28.7041 17.0884 29.0941C17.6684 29.3208 18.2842 29.4491 18.9092 29.4691C19.7117 29.505 19.9659 29.5158 22.0009 29.5158C24.0359 29.5158 24.2967 29.5158 25.0926 29.4691C25.7151 29.4566 26.3309 29.3391 26.9142 29.12C27.9217 28.7291 28.7176 27.9325 29.1084 26.9258C29.3276 26.3425 29.4451 25.7275 29.4576 25.1033C29.4934 24.3016 29.5042 24.0475 29.5042 22.0116C29.5026 19.9766 29.5026 19.7183 29.4559 18.9208ZM21.9951 25.835C19.8667 25.835 18.1426 24.1108 18.1426 21.9825C18.1426 19.8541 19.8667 18.13 21.9951 18.13C24.1217 18.13 25.8476 19.8541 25.8476 21.9825C25.8476 24.1108 24.1217 25.835 21.9951 25.835ZM26.0009 18.8858C25.5034 18.8858 25.1026 18.4841 25.1026 17.9875C25.1026 17.4908 25.5034 17.0891 26.0009 17.0891C26.4967 17.0891 26.8984 17.4908 26.8984 17.9875C26.8984 18.4841 26.4967 18.8858 26.0009 18.8858Z" fill={`${darkmode ? 'white' : '#33354D'}`} style={{fill: hovered ? "white" : "", transition: "var(--transition-default)"}}/>
      <path d="M21.9952 24.485C23.3773 24.485 24.4977 23.3646 24.4977 21.9825C24.4977 20.6004 23.3773 19.48 21.9952 19.48C20.6131 19.48 19.4927 20.6004 19.4927 21.9825C19.4927 23.3646 20.6131 24.485 21.9952 24.485Z" fill={`${darkmode ? 'white' : '#33354D'}`} style={{fill: hovered ? "white" : "", transition: "var(--transition-default)"}}/>
    </svg>

  )
}
export default InstagramSvg