import React, {createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext ()

const ThemeProvider = ({ children }) => {

  const getDarkmode = () => {
    const lsDm = JSON.parse(localStorage.getItem('darkmode'))
    if (lsDm !== null) {
      return lsDm
    } else return matchMedia('(prefers-color-scheme: dark)').matches
  }

  
  const [darkmode, setDarkmode] = useState(getDarkmode)


  const toggleDarkmode = () => {
    setDarkmode(prevState => !prevState)
  }


  useEffect(() => {
    localStorage.setItem('darkmode', JSON.stringify(darkmode))
  }, [darkmode])
  

  return (
    <ThemeContext.Provider value={{ darkmode, toggleDarkmode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider