import {  useState } from "react"
import { CustomThemeContext } from "./CustomThemeContext";


const CustomThemeProvider = ({children}) => {

  const [isDark , setDark] = useState(() => JSON.parse(localStorage.getItem("isDark")) ?? false);

  const toogleTheme = (value) =>{
    localStorage.setItem("isDark",value);
    setDark(value);
  } 

  return (
    <CustomThemeContext.Provider value={{isDark,toogleTheme}}>
        {children}
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider