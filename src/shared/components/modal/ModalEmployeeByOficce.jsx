import { AddIcon, EditIcon } from "@chakra-ui/icons"
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useApiEmployeeContext } from "../../hooks/service/crudEmployee/CrudEmployeeContext";
import { useEffect, useState } from "react";
import { useApiContext } from "../../hooks/service/crud/CrudContext";


const ModalEmployeeByOficce = ({isOpen,closeModal,office,confirmAsignacion}) => {

    const {data,fetchData}= useApiEmployeeContext();
    const {postEmployeeByOffice} = useApiContext();
    const [formData,setFormData] = useState(1);

    useEffect(()=>{
        const controller = new AbortController();
          const listEmployee=async()=>{
              await fetchData("employee",controller.signal);
          }
          listEmployee();
        return ()=> controller.abort;
      },[]);

    //  add employee to office
    const sendFormEmployeeByOffice=async(e)=>{
        e.preventDefault();
        const response = await postEmployeeByOffice(`office/${office.id}/employee/${formData}`);
        if(response.success) {
            confirmAsignacion(true);
            alert(response.message.message);
        }
    }

    const getInputForm=(e)=> setFormData(e.target.value);

  return (
     <div>
        <Modal isOpen={isOpen.open} onClose={closeModal} isCentered>
            <ModalOverlay>
                <ModalContent p='2'>
                    <ModalCloseButton _hover={{color:"blue.600"}} />

                    <ModalHeader fontSize='3.6rem' color='gray.700' style={{fontFamily:"Beau Rivage"}}>{isOpen.action} Empleado</ModalHeader>
                    
                    <ModalBody>
                        <form className="flex flex-col gap-5" onSubmit={sendFormEmployeeByOffice}>

                            <select className="py-2 border-[1px] border-blue-300 rounded-md" name="employees" 
                                    value={formData} onChange={getInputForm}>
                                {data && data.map(employee => (
                                    <option key={employee.id} value={employee.id} >{employee.name}</option>
                                ))}
                            </select>
                            
                            <Flex justify='end'>
                                <Button type="submit" bg={`${isOpen.action==='Actualizar' ? 'yellow.500': 'green.500'}`}  color='white' 
                                        _hover={{bg:'blue.500'}}> {isOpen.action==='Actualizar' ? <EditIcon pr={1}/>:<AddIcon pr={1}/>}
                                        {isOpen.action}
                                </Button>
                            </Flex>
                            
                        </form>
                    </ModalBody>

                </ModalContent>
            </ModalOverlay>

        </Modal>
    </div>
  )
}

export default ModalEmployeeByOficce