import { isStrongPassword } from "validator";

const InputPassword = ({nameInput,placeholder,register,errors}) => {
 
  return (
    <>
        <input
        {...register(nameInput,{
            required:`${placeholder} es Requerido`,
            validate:value => {
                if(!value || value.length < 6 ) return "Minimo 6 letras minúsculas"
                if(!/[A-Z]/.test(value)) return "Minimo 1 letra mayúscula"
                if(!/[0-9]/.test(value)) return "Minimo 1 número"
                if(!/[!@#$%&*(),.?":{}|<>]/.test(value)) return "Minimo 1 símbolo"
                if(!isStrongPassword(value,{minLength:6,minNumbers:1,minSymbols:1,minUppercase:1})) return "Contaseña Insegura"
            }
        })}
        type="password"
        className="py-2 px-5 rounded-md border-[2px] active-input"
        placeholder={`Ingrese ${placeholder}`}
        />
        {errors[nameInput] && (<p className="text-red-600 capitalize">{errors[nameInput].message}</p>)}
    </>
  )
}

export default InputPassword