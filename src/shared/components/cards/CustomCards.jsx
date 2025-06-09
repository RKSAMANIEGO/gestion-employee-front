import { Link } from "react-router-dom";
import { useApiContext } from "../../hooks/service/crud/CrudContext";
import ConfirmDeleteDialog from "../alert/ConfirmDeleteDialog";
import { useState } from "react";

const CustomCards = ({data,openModal,idOffice}) => {

  const {deleteData} = useApiContext();
  const [OfficeId,setOfficeId]=useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  const handleDelete = async() => {
    if(OfficeId){
          const response = await deleteData("office",OfficeId);
          if(response.success) alert("Oficina Eliminada");
          closeDialog();
    }
  };

  return (
    <>
      {data.map(obj=>(

        <div key={obj.id} className=" flex flex-col items-center justify-between border-[1px] border-gray-800 w-[200px] h-[230px] rounded-md p-5 group hover:shadow-sm hover:shadow-gray-700">
          
          <Link to={`/panel/office/${obj.id}`}>
           <div className="overflow-hidden">
            <img className="transition-all duration-500   group-hover:scale-105  cursor-pointer w-[100px]" src="https://png.pngtree.com/png-vector/20240322/ourmid/pngtree-vector-of-bank-branch-national-bank-of-america-png-image_12179547.png" alt="office"/>
           </div>
          </Link>

           <div>
            <h3 className="capitalize">{obj.name}</h3> 
           </div> 

            <div className="flex justify-around gap-2 text-white">
                <button className="bg-yellow-600 rounded-sm w-16 py-1 transition-all duration-500 hover:-translate-y-1" onClick={()=>{ openModal("Actualizar"); idOffice(obj)} }>Editar</button>
                <button className="bg-red-600 rounded-sm w-16 py-1 transition-all duration-500 hover:-translate-y-1" onClick={()=>  {openDialog(); setOfficeId(obj.id);  }   }>Eliminar</button>
            </div>

        </div>
      ))}

        <ConfirmDeleteDialog isOpen={isDialogOpen} onClose={closeDialog} onConfirm={handleDelete} itemName="la Oficina"
        />
    </>
  )
}

export default CustomCards