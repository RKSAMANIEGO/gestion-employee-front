import {AccountBookOutlined, HomeFilled, LeftOutlined, LogoutOutlined, MoonOutlined, PhoneFilled, SunOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useState } from 'react'
import logho from '../../../../assets/logo.avif'
import Li from '../../../../shared/components/listas/Li';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../../core/store/Theme/ThemeContext';


const SidebarAdmin = () => {

  const [openSidebar,setOpenSidebar] = useState(true);
  const navigate = useNavigate();
  const {isDark,toogleTheme} = useTheme();

  const handleLogOut = ()=> navigate("/login");

  return (

      <aside  className={`relative  ${openSidebar ? 'w-[15%]' :' w-[5%]'}`}>
          <LeftOutlined className={`absolute top-[13%] -right-[15px] bg-white p-[8px] rounded-full text-black border-[1px] border-gray-900 ${!openSidebar && 'rotate-[180deg]' }`} onClick={()=>setOpenSidebar(!openSidebar)}/> 
          
          <div className='flex flex-col items-center justify-between h-[100vh] p-5'>
            <img src={logho} alt="logo" className='rounded-full w-[70%]  min-w-[40px]'/>
          
            <ul className='flex flex-col gap-5'>
              <Li name="Home" isOpen={openSidebar} icon={<HomeFilled/>} path="home"/>
              <Li name="About Me" isOpen={openSidebar} icon={<AccountBookOutlined/>} path="about"/>
              <Li name="Contact" isOpen={openSidebar} icon={<PhoneFilled/>} path="contact"/>
            </ul>
            
            <div className={`flex ${openSidebar ? 'gap-5' : 'gap-2'}`}>

              {isDark ? 
              <SunOutlined  className='cursor-pointer text-yellow-600' onClick={()=>toogleTheme(!isDark)}/> : 
              <MoonOutlined className='cursor-pointer text-blue-600' onClick={()=>toogleTheme(!isDark)}/>  
              }

              <Tooltip title="Cerrar Sesión"> 
                    <LogoutOutlined className='cursor-pointer rotate-[180deg] text-gray-200' onClick={handleLogOut}/>
              </Tooltip>
            </div>
      
          </div>
      </aside>

  )
}

export default SidebarAdmin