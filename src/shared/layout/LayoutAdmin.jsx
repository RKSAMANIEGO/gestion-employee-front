import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../modules/admin/dashboard/Main/HeaderAdmin'
import SidebarAdmin from '../../modules/admin/dashboard/Main/SidebarAdmin'
//import { useCustomTheme } from '../../core/store/Theme/CustomThemeContext';


const LayoutAdmin= () => {

 // const {isDark} = useCustomTheme();
 const isDark = true;
  return (
    <div className={`flex bg-black text-white h-[100dvh]`}>
        <SidebarAdmin/>
        
        <div className='w-full'>
            <HeaderAdmin/>
            <div className={`px-10 py-7 ${isDark ? "bg-[#0d0d0e] border-t-[1px] border-l-[1px] border-white text-white" :"bg-white text-black"} overflow-auto h-[90dvh] rounded-tl-2xl scrollbar-hide`}>
                  <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default LayoutAdmin