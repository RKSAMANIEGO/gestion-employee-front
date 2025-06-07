import { UserOutlined } from "@ant-design/icons";
import InputEmail from "../../../../shared/components/inputs/InputEmail";
import InputPassword from "../../../../shared/components/inputs/InputPassword";
import { useForm } from "react-hook-form";
import Button from "../../../../shared/components/inputs/Button";
import { useState } from "react";

const HeaderAdmin = () => {

  const {register,handleSubmit,formState:{errors}} = useForm();
  const [isOpenRegister,setOpenRegister] = useState(false);
  const user="enrike";
  const handleRegister = (data) => console.log(data);

  return (
  <>
    <div className="flex justify-between items-center h-[10dvh] px-5">
        <h3 className="text-2xl" style={{fontFamily: "Lobster"}}>Panel Administrativo</h3>
        <span className="flex gap-1">Bienvenido <p className="capitalize">{user}</p> <UserOutlined className="cursor-pointer" onClick={()=>setOpenRegister(!isOpenRegister)}/> </span>
    </div>

    <div className={`transition-transform duration-500 ease-in-out ${isOpenRegister ? "translate-x-[0%]" :"translate-x-[100%]"} fixed right-0 top-0 h-[100dvh] w-[25%] z-10 bg-black text-white p-5`}>
        <div className="text-right cursor-pointer hover:text-blue-500" onClick={()=>setOpenRegister(!isOpenRegister)}>&#215;</div>
        <h3 className="text-3xl">Registrar</h3>
        <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-5 my-5 text-black">
            <InputEmail nameInput="email" placeholder="correo" register={register} errors={errors}/>
            <InputPassword nameInput="password" placeholder="contraseña" register={register} errors={errors}/>
            <Button text="Registrar" bgColor="blue" textColor="white"/>
        </form>
    </div>
  </>
  )
}

export default HeaderAdmin