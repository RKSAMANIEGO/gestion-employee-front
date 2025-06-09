import { AddIcon, EditIcon } from "@chakra-ui/icons"
import { Button, Flex, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useApiContext } from "../../hooks/service/crud/CrudContext";
import { useApiEmployeeContext } from "../../hooks/service/crudEmployee/CrudEmployeeContext";

const ModalCustom = ({isOpen,closeModal,employeeUpdate}) => {

    console.log(employeeUpdate);

  const [dataForm,setDataForm] =useState({name:"",phone:"",dni:"",direction:"",birthday:"",offices:[]});
  const {data,fetchData} = useApiContext();
  const {postData,putData }=useApiEmployeeContext();

    useEffect(()=>{
      const controller = new AbortController();
      fetchData("office",controller.signal);
      return ()=> controller.abort();
    },[]);

    useEffect(()=>{
        (isOpen.action === "Actualizar") ? setDataForm({name:employeeUpdate.name|| '',phone:employeeUpdate.phone || '',dni:employeeUpdate.dni || '',direction:employeeUpdate.direction || '',birthday:employeeUpdate.birthday || ''}) 
                                         : setDataForm({name:"",phone:"",dni:"",direction:"",birthday:"",offices:[]});
    },[employeeUpdate,isOpen])



  const sendFormEmployee =async (e) =>{
    e.preventDefault();
    console.log(dataForm);

        if(isOpen.action === "Registrar"){
            const response = await postData("employee",dataForm);
             if(response.success){
                alert("Empleado Registrado");
                setDataForm({name:"",phone:"",dni:"",direction:"",birthday:"",offices:[]});
                closeModal();
                return;
            }
        }
        if(isOpen.action == "Actualizar"){
            const response = await putData("employee",employeeUpdate.id,dataForm);
            if(response.success){
                alert("Oficina Actualizado");
                setDataForm({name:"",phone:"",dni:"",direction:"",birthday:"",offices:[]});
                closeModal();
                return;
            }
        }
       
  } 

  const getInput=(e)=>{
    const {name,value}=e.target;
    if(name === "offices") setDataForm(prev => ({ ...prev, [name]:[value] }))
    else setDataForm(prev => ({...prev,[name]:value}))
  }



  return (
    <div>
        <Modal isOpen={isOpen.open} onClose={closeModal} isCentered>
            <ModalOverlay>
                <ModalContent p='2'>
                    <ModalCloseButton _hover={{color:"blue.600"}} />

                    <ModalHeader fontSize='3.6rem' color='gray.700' style={{fontFamily:"Beau Rivage"}}>{isOpen.action} Empleado</ModalHeader>
                    
                    <ModalBody>
                        <form className="flex flex-col gap-2" onSubmit={sendFormEmployee}>
                            <FormControl> <Input name="name" value={dataForm.name} onChange={getInput} type="text" border='1px solid' borderColor='blue.200'  placeholder="Ingrese su nombre"/></FormControl>
                            <FormControl> <Input name="dni" value={dataForm.dni} onChange={getInput} type="text" border='1px solid' borderColor='blue.200'  placeholder="Ingrese su dni"/> </FormControl>
                            <FormControl> <Input name="phone" value={dataForm.phone} onChange={getInput} type="text" border='1px solid' borderColor='blue.200'  placeholder="Ingrese su celular"/> </FormControl>
                            <FormControl> <Input name="direction" value={dataForm.direction} onChange={getInput} type="text" border='1px solid' borderColor='blue.200'  placeholder="Ingrese su dirección"/> </FormControl>
                            <FormControl> <Input name="birthday" value={dataForm.birthday} onChange={getInput} type="date" border='1px solid' borderColor='blue.200'/> </FormControl>
                            
                            {isOpen.action !== "Actualizar" &&
                                 <select className="py-2 border-[1px] border-blue-300 rounded-md" name="offices"
                                    value={dataForm.offices}
                                    onChange={getInput}
                                >
                                
                                    {data && data.map(office=>(
                                    <option key={office.id} value={office.id} >{office.name}</option>
                                )) }
                                
                                </select>
                            }

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

export default ModalCustom