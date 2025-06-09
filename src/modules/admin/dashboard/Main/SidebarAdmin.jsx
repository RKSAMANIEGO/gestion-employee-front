import { useState } from 'react'
import logho from '../../../../assets/logo.avif'
import Li from '../../../../shared/components/listas/Li';
import { useNavigate } from 'react-router-dom';
import {  FiChevronLeft, FiHome, FiLogOut } from 'react-icons/fi';
import { MdBusiness } from 'react-icons/md';
//import { useCustomTheme } from '../../../../core/store/Theme/CustomThemeContext';



const SidebarAdmin = () => {

  const [openSidebar,setOpenSidebar] = useState(true);
  const navigate = useNavigate();
  //const {isDark,toogleTheme} = useCustomTheme();

  const handleLogOut = ()=> {
    navigate("/");
    localStorage.removeItem("token");
  }

  let isDark=true;

  const toogleTheme=(value)=>{
      isDark=value;
    }
  /*
   line 2 icon <
   line 33 icon item
   
              {isDark ? 
              <button  className='w-10 bg-yellow-500 cursor-pointer text-yellow-600' onClick={()=>toogleTheme(!isDark)}/> : 
              <button className='w-10 bg-blue-600 cursor-pointer text-blue-600' onClick={()=>toogleTheme(!isDark)}/>  
              }

   */
  return (

      <aside  className={`relative  ${openSidebar ? 'w-[15%]' :' w-[5%]'}`}>
          <FiChevronLeft  className={`absolute top-[13%] cursor-pointer text-3xl -right-[15px] p-[6px] rounded-full bg-black text-white border-[1px] border-white ${!openSidebar && 'rotate-[180deg]' }`} onClick={()=>setOpenSidebar(!openSidebar)}/> 
          
          <div className='flex flex-col items-center justify-between h-[100vh] p-5'>
            <img src={logho} alt="logo" className='rounded-full w-[70%]  min-w-[40px]'/>
          
            <ul className='flex flex-col gap-5'>
              <Li name="Oficinas" isOpen={openSidebar} icon={<MdBusiness/>} path="office"/>
              <Li name="Empleados" isOpen={openSidebar} icon={<FiHome/>} path="employee"/>           
            </ul>
            
            <div className={`flex ${openSidebar ? 'gap-5' : 'gap-2'}`}>

    
              <FiLogOut  className='text-[1rem] cursor-pointer rotate-[180deg] text-gray-200' onClick={handleLogOut}/>
            </div>
      
          </div>
      </aside>

  )
}

export default SidebarAdmin