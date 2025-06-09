import { AddIcon, EditIcon } from '@chakra-ui/icons'
import { Button, Flex, FormControl, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useApiContext } from '../../hooks/service/crud/CrudContext';

const ModalOffice = ({isOpen,closeModal,officeUpdate}) => {

    const [formOffice,setFormOffice] = useState({name:""});
    const {putData, postData}= useApiContext();

    useEffect(()=>{
        (isOpen.action === "Actualizar") ? setFormOffice({name:officeUpdate.name || ''}) : setFormOffice({name:""});
    },[officeUpdate,isOpen])

    
    const getInput = (e) => {
        const {name,value} = e.target;
        setFormOffice((prev)=> ({
            ...prev,
            [name]:value
        }))
    }

    const sendFromQuestion =async (e) =>{
        e.preventDefault();

        if(isOpen.action == "Registrar"){
            const response = await postData("office",formOffice);
            if(response.success){
                alert("Oficina Registrado");
                setFormOffice({name:""});
                closeModal();
            }
        }
        if(isOpen.action == "Actualizar"){
            const response = await putData("office",officeUpdate.id,formOffice);
            if(response.success){
                alert("Oficina Actualizado");
                setFormOffice({name:""});
                closeModal();
            }
        }
    }

  return (
    <div>
        <Modal isOpen={isOpen.open} onClose={closeModal} isCentered>
            <ModalOverlay>
                <ModalContent p='2'>
                    <ModalCloseButton _hover={{color:"blue.600"}} />

                    <ModalHeader fontSize='3.6rem' color='gray.700' style={{fontFamily:"Beau Rivage"}}>{isOpen.action} Oficinas</ModalHeader>
                    
                    <ModalBody>
                        <form className="flex flex-col gap-5" onSubmit={sendFromQuestion}>
                            <FormControl> <Input name="name" type="text" required  value={formOffice.name} onChange={getInput} border='1px solid' borderColor='blue.200'  placeholder="Ingrese el nombre de la oficina"/></FormControl>
                            <Flex justify='end'>
                                <Button type='submit' bg={`${isOpen.action==='Actualizar' ? 'yellow.500': 'green.500'}`}  color='white' 
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

export default ModalOffice