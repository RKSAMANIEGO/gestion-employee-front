import { useParams } from "react-router-dom"
//import AddFloat from "../../../../shared/components/float/AddFloat"
import { useModalGlobal } from "../../../../shared/components/modal/Context/ModalGlobalContext"
import ModalCustom from "../../../../shared/components/modal/ModalCustom"
import ModalDetailEmployee from "../../../../shared/components/modal/ModalDetailEmployee"
import SearchAdmin from "../../../../shared/components/search/SearchAdmin"
import TableCustom from "../../../../shared/components/table/TableCustom"
import TitleSection from "../../../../shared/components/Title/TitleSection"
import { useApiContext } from "../../../../shared/hooks/service/crud/CrudContext"
import { useEffect, useState } from "react"
import ModalEmployeeByOficce from "../../../../shared/components/modal/ModalEmployeeByOficce"

const EmployeesByOffice = () => {
    const {isOpen,openModal,closeModal}= useModalGlobal();
    const [dataOffice,setDataOffice] = useState(null);
    const [dataEmployeeByOffice,setDataEmployeeByOffice] = useState([]);
    const [detailEmployee,setDetailEmployee]=useState(null);
    const {fetchDataEmployeeByOffice, findById} = useApiContext();
    const [updateTable,setUpdateTable]=useState(false);
    const [searchEmployee,setSearchEmployee]=useState(null);
    const params = useParams();

    //datos de la oficina
    useEffect(()=>{
        const controller = new AbortController();

        const getOfficeById= async()=>{
            const response =await findById("office",params.id);
            setDataOffice(response);
            if(response){
                const responseEmployeeOffice =  await fetchDataEmployeeByOffice(`office/${params.id}/employees`,controller.signal);
                setDataEmployeeByOffice(responseEmployeeOffice);
            }
        }
        getOfficeById();
        return ()=>controller.abort
    },[updateTable])

    const getDetailsEmployee =(obj) => setDetailEmployee(obj);

    const confirmAsignacion = (confirm)=>{
        if(confirm === updateTable ){
           setUpdateTable(!confirm);
        }else{
           setUpdateTable(confirm);
        }
    }

    const filterEmployee = ()=>{
     return  dataEmployeeByOffice?.filter(employee => employee.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||  
                                      employee.dni.includes(searchEmployee)) ?? [];
    }

    const getDataSearch = (text)=> setSearchEmployee(text);
  return (
     <div className="flex flex-col gap-4">
       <TitleSection title={`Empleados de la ${dataOffice && dataOffice.name }`}/>
      <div className="flex justify-end">
          <button type="button" className="bg-pink-700 transition-shadow duration-500 py-3 rounded-md px-5 hover:shadow-sm hover:shadow-yellow-50" onClick={()=>openModal("Asignar")}>Asignar Empleados</button>
      </div>
    
      <SearchAdmin placeholder='Nombre y Dni' setDataSearch={getDataSearch}/>
      <TableCustom openModal={openModal} employee={(dataEmployeeByOffice.length>0 ) && (searchEmployee ? filterEmployee() : dataEmployeeByOffice ) || [] } detailEmployee={getDetailsEmployee} title='employeeByOffice' office={dataOffice && dataOffice} confirmEliminacion={confirmAsignacion}/>

      {isOpen.action === "Detalles" && <ModalEmployeeByOficce isOpen={isOpen} closeModal={closeModal} office={dataOffice && dataOffice} confirmAsignacion={confirmAsignacion}/> } 
      {(isOpen.action === "Actualizar" || isOpen.action === "Registrar") &&  <ModalCustom isOpen={isOpen} closeModal={closeModal}/>} 
      {isOpen.action === "Detalles" && <ModalDetailEmployee isOpen={isOpen} closeModal={closeModal}  dataEmployee={detailEmployee && detailEmployee}/> }
    </div>
  )
}

export default EmployeesByOffice