import { createContext, useContext } from "react";

export const CrudContext = createContext();

export const useApiContext = () => useContext(CrudContext);