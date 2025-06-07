import { useState } from "react"
import { CrudContext } from "./CrudContext"
import { api } from "../../../../core/api/api";
import axios from "axios";

const CrudProvider = ({children}) => {

    const [data,setData] = useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState('');

    const fetchData= async(path,signal)=>{
        try {
            setLoading(true);
            const response = await api.get(`${path}`,{signal});
            if(response.status===200){
                setData(response.data);
                setError('');
            }
        } catch (error) {
            if(axios.isCancel(error)) return console.log("Petición Cancelada "+error.message);
            const message = error?.response?.data?.message || "Ocurrio un Error al Listar";
            console.log(message);
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    const postData= async(path,form)=>{
        try {
            setLoading(true);
            const response = await api.post(`${path}`,form);
            if(response.status === 201){
                fetchData(`${path}`);
                return {success:true};
            }
        } catch (error) {
            const message = error?.response?.data?.message || "Ocurrio un Error al Registrar";
            console.log(message);
            setError(message);
            return {success:false, message};
        } finally {
            setLoading(false);
        }
    }

    const putData= async(path,id,form)=>{
        try {
            setLoading(true);
            const response = await api.put(`${path}/${id}`,form);
            if(response.status === 200){
                fetchData(`${path}`)
                return {success:true};
            }
        } catch (error) {
            const message = error?.response?.data?.message || "Ocurrio un Error al Actualizar";
            console.log(message);
            setError(message);
            return {success:false, message};
        } finally{
            setLoading(false);
        }
    }

    const deleteData =async(path,id) => {
        try {
            setLoading(true);
            const response = await api.delete(`${path}/${id}`);
            if(response.status === 200){
                fetchData(`${path}`);
                return true;
            }
        } catch (error) {
            const message = error?.response?.data?.message || "Ocurrio un Error al Eliminar";
            console.log(message);
            setError(message);
            return {success:false, message};
        } finally{
            setLoading(false);
        }
    }

    const contextValue={data,loading,error,fetchData,postData,putData,deleteData}
    
    return (
        <CrudContext.Provider value={contextValue}>
            {children}
        </CrudContext.Provider>
  )
}

export default CrudProvider