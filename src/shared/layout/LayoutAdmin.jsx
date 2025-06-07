import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../modules/admin/dashboard/Main/HeaderAdmin'
import SidebarAdmin from '../../modules/admin/dashboard/Main/SidebarAdmin'
import { useTheme } from '../../core/store/Theme/ThemeContext'

const LayoutAdmin= () => {

  const {isDark} = useTheme();

  return (
    <div className={`flex bg-black text-white h-[100dvh]`}>
        <SidebarAdmin/>
        
        <div className='w-full'>
            <HeaderAdmin/>
            <div className={`px-10 py-7 ${isDark ? "bg-[#0d0d0e] border-t-[1px] border-l-[1px] border-white text-white" :"bg-white text-black"} overflow-auto h-[90dvh] rounded-tl-2xl`}>
                  <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default LayoutAdmin