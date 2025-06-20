import { useForm } from "react-hook-form"
import Button from "../../../shared/components/inputs/Button"
import InputEmail from "../../../shared/components/inputs/InputEmail"
import InputPassword from "../../../shared/components/inputs/InputPassword"
import { useNavigate } from "react-router-dom"
import { useApiContext } from "../../../shared/hooks/service/crud/CrudContext"

const LoginPage= () => {

  const{register,handleSubmit,formState:{errors}} = useForm();
  const navigate = useNavigate();
  const {login}= useApiContext();

  const sendForm = async(data) =>{
      console.log(data);
      const response = await login('login',data);
      if(response.token){
        console.log(response);
        localStorage.setItem("token",response.token);
        navigate("/panel");
      }
     
  }

  return (
    <div className="grid place-items-center bg-black h-[100dvh]">
      <div className="flex flex-col gap-5 w-[50%] max-w-7xl m-auto">
        <h2 className="font-bold text-6xl text-blue-500 text-center">Welcome</h2>

        <form className="flex flex-col gap-5" onSubmit={handleSubmit(sendForm)}>
            <InputEmail nameInput="email" placeholder="correo" register={register} errors={errors}/>
            <InputPassword nameInput="password" placeholder="contraseña" register={register} errors={errors}/>
            <Button text='Ingresar' bgColor='blue' textColor='white'/>
        </form>

      </div>
    </div>
  )
}

export default LoginPage