import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import { FaBirthdayCake } from "react-icons/fa"
import { HiIdentification } from "react-icons/hi"
import { MdPhoneIphone } from "react-icons/md"

const ModalDetailEmployee = ({isOpen,closeModal,dataEmployee}) => {

  return (
    <div>
        <Modal isOpen={isOpen.open} onClose={closeModal} isCentered>
            <ModalOverlay>
                <ModalContent p='2'>
                    <ModalCloseButton _hover={{color:"blue.600"}} />

                    <ModalHeader fontSize='3.6rem' color='gray.700' textAlign='center' style={{fontFamily:"Beau Rivage"}}>{isOpen.action} Empleado</ModalHeader>
                    
                    <ModalBody>
                    <div className="flex flex-col">
                      
                       <div className="flex justify-center">
                            <img className="w-[300px] rounded-t-xl" src="https://img.freepik.com/vector-premium/icono-usuario-hombre-traje-negocios_454641-453.jpg" alt="employee"/>
                       </div>

                       <div className="flex flex-col items-center">
                            <p className="font-bold uppercase">{dataEmployee.name}</p>
                            <span className="flex justify-between text-gray-600 w-[75%]" >
                                <p className="flex items-center"><HiIdentification/> {dataEmployee.dni}</p>  
                                <p className="flex items-center"> <FaBirthdayCake/>{dataEmployee.birthday}</p> 
                                <p className="flex items-center"><MdPhoneIphone/>  {dataEmployee.phone}</p>
                            </span>
                            <p className="truncate" >{dataEmployee.direction}</p>

                            <div className="flex flex-col">
                                <h5 className="text-center font-bold">Oficinas</h5>
                                <div className="flex flex-wrap justify-center gap-2 text-gray-600">
                                    {dataEmployee.offices.map(office => (
                                    <div key={office.id} className="flex flex-col items-center justify-center gap-2">
                                        <img className="w-[50px]" src="https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-vector-of-bank-branch-national-bank-of-america-png-image_12179547.png" alt="oficce"/>
                                        <p className="capitalize font-bold">{office.name}</p>
                                    </div>    
                                    ))}
                                </div>
                            </div>

                       </div>
                    </div>  

                    </ModalBody>

                </ModalContent>
            </ModalOverlay>

        </Modal>
    </div>
  )
}

export default ModalDetailEmployee