import { useEffect, useState } from 'react'
import AddFloat from '../../../../shared/components/float/AddFloat'
import { useModalGlobal } from '../../../../shared/components/modal/Context/ModalGlobalContext'
import ModalCustom from '../../../../shared/components/modal/ModalCustom'
import ModalDetailEmployee from '../../../../shared/components/modal/ModalDetailEmployee'
import SearchAdmin from '../../../../shared/components/search/SearchAdmin'
import TableCustom from '../../../../shared/components/table/TableCustom'
import TitleSection from '../../../../shared/components/Title/TitleSection'
import { useApiEmployeeContext } from '../../../../shared/hooks/service/crudEmployee/CrudEmployeeContext'

const HomePage = () => {

  const {isOpen,openModal,closeModal}= useModalGlobal();
  const {data,fetchData}= useApiEmployeeContext();
  const [detailEmployee,setDetailEmployee]=useState(null);
  const [searchEmployee,setSearchEmployee]=useState(null);

  useEffect(()=>{
    const controller = new AbortController();

      const listEmployee=async()=>{
          await fetchData("employee",controller.signal);
      }
      listEmployee();
    return ()=> controller.abort;
  },[]);
  
  const filterEmployee = ()=>{
     return  data?.filter(employee => employee.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||  
                                      employee.dni.includes(searchEmployee)) ?? [];
  }
  
  const getDetailsEmployee =(obj) => setDetailEmployee(obj);

  const getDataSearch = (text)=> setSearchEmployee(text);

  return (
    <div className="flex flex-col gap-4">
      <TitleSection title="Gestion de Empleados"/>
      <SearchAdmin placeholder='Nombre y Dni' setDataSearch={getDataSearch}/>
      <TableCustom openModal={openModal} employee={(data) && ( (searchEmployee ? filterEmployee() :  data ) )}  detailEmployee={getDetailsEmployee} title="employee"/>
      <AddFloat openModal={()=>openModal("Registrar")}/>
      {(isOpen.action === "Actualizar" || isOpen.action === "Registrar") &&  <ModalCustom isOpen={isOpen} closeModal={closeModal} employeeUpdate={detailEmployee && detailEmployee}/>} 
      {isOpen.action === "Detalles" && <ModalDetailEmployee isOpen={isOpen} closeModal={closeModal} dataEmployee={detailEmployee && detailEmployee} /> }
    </div>
  )
}

export default HomePage