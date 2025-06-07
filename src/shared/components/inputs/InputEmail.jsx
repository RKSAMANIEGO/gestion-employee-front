import { isEmail } from "validator";

const InputEmail = ({nameInput,placeholder,register,errors}) => {
  
  return (
  <>
    <input
      {...register(nameInput,{
          required:`${nameInput} es Requerido`,
          validate: value => isEmail(value) || "Correo No Valido"
      })}
      className="py-2 px-5 rounded-md  border-[2px] active-input"
      placeholder={`Ingrese ${placeholder}`}/>

     { errors[nameInput] && ( <p className="text-red-600 capitalize">{errors[nameInput].message} </p>) }
    </>
  )
}

export default InputEmail