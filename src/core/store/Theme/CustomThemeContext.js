import { createContext, useContext } from "react";

export const CustomThemeContext = createContext();

export const useCustomTheme = () => useContext(CustomThemeContext);

