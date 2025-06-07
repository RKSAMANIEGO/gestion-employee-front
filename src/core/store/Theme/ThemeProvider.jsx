import {  useState } from "react"
import { ThemeContext } from "./ThemeContext"

const ThemeProvider = ({children}) => {

  const [isDark , setDark] = useState(()=> JSON.parse(localStorage.getItem("isDark")) ?? false);

  const toogleTheme = (value) =>{
    localStorage.setItem("isDark",value);
    setDark(value);
  } 

  return (
    <ThemeContext.Provider value={{isDark,toogleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider