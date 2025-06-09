import { createContext, useContext } from "react";

export const ModalGlobalContext = createContext();

export const useModalGlobal = () => useContext(ModalGlobalContext);