import { useState } from "react"
import { ModalGlobalContext } from "./ModalGlobalContext";


const ModalGlobalProvider = ({children}) => {

    const [isOpen,setIsOpen]=useState({open:false,action:''});

    const openModal = (value)=> setIsOpen({open:true,action:value});
    const closeModal=()=>setIsOpen({open:false,action:''});

  return (
    <ModalGlobalContext.Provider value={{isOpen,openModal,closeModal}}>
        {children}
    </ModalGlobalContext.Provider>
  )
}

export default ModalGlobalProvider