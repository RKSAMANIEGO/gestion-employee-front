import { createContext, useContext } from "react";

export const CrudEmployeeContext = createContext();

export const useApiEmployeeContext = () => useContext(CrudEmployeeContext);