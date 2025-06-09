import { useEffect, useState } from "react"
import CustomCards from "../../../../shared/components/cards/CustomCards"
import AddFloat from "../../../../shared/components/float/AddFloat"
import { useModalGlobal } from "../../../../shared/components/modal/Context/ModalGlobalContext"
import ModalOffice from "../../../../shared/components/modal/ModalOffice"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import { useApiContext } from "../../../../shared/hooks/service/crud/CrudContext"
import { Outlet } from "react-router-dom"

const OfficePage = () => {
  const {isOpen,openModal,closeModal}= useModalGlobal();
  const [questionFilter,setQuestionFilter]=useState(null);
  const{fetchData,data}=useApiContext();

  useEffect(()=>{
      const controller = new AbortController();
      fetchData("office",controller.signal);
      return ()=> controller.abort();
  },[]);

  const getIdOffice=(id)=>setQuestionFilter(id);
    
  return (
    <div className="flex flex-col gap-10">
        <TitleSection title='Gestion de Oficinas'/>
        <div className="flex flex-wrap gap-6">
            <CustomCards data={(data.length>0) && data || []} openModal={openModal} idOffice={getIdOffice}/>
        </div>

        <AddFloat openModal={()=>openModal("Registrar")}/>
        <ModalOffice isOpen={isOpen} closeModal={closeModal} officeUpdate={questionFilter && questionFilter}/>
        <Outlet/>
    </div>
  )
}

export default OfficePage