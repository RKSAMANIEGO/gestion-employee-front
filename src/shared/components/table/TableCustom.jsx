import {Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import AnimationIn from '../../animations/AnimationIn'
import { DeleteIcon, EditIcon, ViewIcon } from '@chakra-ui/icons'
import { useApiEmployeeContext } from '../../hooks/service/crudEmployee/CrudEmployeeContext'
import { useApiContext } from '../../hooks/service/crud/CrudContext'
import { useState } from 'react'
import ConfirmDeleteDialog from '../alert/ConfirmDeleteDialog'


const TableCustom = ({openModal,employee,detailEmployee,title='',office,confirmEliminacion}) => {

  const {deleteData} = useApiEmployeeContext();
  const {deleteEmployeeByOffice} = useApiContext();
  const [idEmployee,setIdEmployee]=useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleDelete = async() => {
        if(idEmployee){
          const response = await deleteData('employee',idEmployee);
          response.success && alert("Empleado Eliminado");
          closeDialog();
        }
  };

  return (
  <AnimationIn direction='bottom'>
    <TableContainer w='full'  borderRadius='10px' overflow='hidden'>
      <Table variant='' size='lg'>
        <Thead>
          <Tr bgGradient='linear(to-r, gray.800)' >
          
            <Th textAlign='center'>Nombre</Th>
            <Th textAlign='center'>Dni</Th>
            <Th textAlign='center'> Celular</Th>
            <Th textAlign='center'>Direccion</Th>
            <Th textAlign='center'>Cumpleaños</Th>
            <Th textAlign='center'>Opciones</Th>
          </Tr>
  
        </Thead>

        <Tbody>
          {employee.map(empl =>(
          <Tr key={empl.id}>
            <Td>{empl.name}</Td>
            <Td>{empl.dni}</Td>
            <Td>{empl.phone}</Td>
            <Td>{empl.direction}</Td>
            <Td>{empl.birthday}</Td>
            <Td>
              <Flex justify='space-around'>
                  <ViewIcon color='blue.600' cursor='pointer' _hover={{ color:"blue.500", transform:'scale(1.3)' }} onClick={()=>{openModal("Detalles"); detailEmployee(empl)} }/>
                    
                  {title==='employee' &&  <EditIcon color='yellow.600' cursor='pointer' _hover={{ color:"yellow.500", transform:'scale(1.3)'}} onClick={ ()=>{openModal("Actualizar"); detailEmployee(empl); } }/>}
                  
                  {title==='employee' && 
                  <DeleteIcon color='red.600' cursor='pointer' _hover={{ color:"red.500", transform:'scale(1.3)'}}  onClick={async()=>{
                    openDialog();
                    setIdEmployee(empl.id);
                   } }/>
                  }

                  {title==='employeeByOffice' && 
                  <DeleteIcon color='red.600' cursor='pointer' _hover={{ color:"red.500", transform:'scale(1.3)'}}  onClick={async()=>{
                    const response = await deleteEmployeeByOffice(`office/${office.id}/employee/${empl.id}`);
                    if(response.success ) {
                      confirmEliminacion(true);
                      alert(response.message.message);
                    }
                   } }/>
                  }
              </Flex>
            </Td>
          </Tr>

          ) )}

        </Tbody>
      </Table>
    </TableContainer>

    <ConfirmDeleteDialog isOpen={isDialogOpen} onClose={closeDialog} onConfirm={handleDelete} itemName="el Empleado"/>

  </AnimationIn>
  )
}

export default TableCustom