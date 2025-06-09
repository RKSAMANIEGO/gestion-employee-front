import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../modules/admin/auth/LoginPage'
import LayoutAdmin from '../../shared/layout/LayoutAdmin'
import HomePage from '../../modules/admin/dashboard/home/HomePage'
import OfficePage from '../../modules/admin/dashboard/home/OfficePage'
import EmployeesByOffice from '../../modules/admin/dashboard/home/EmployeesByOffice'

const RouteApp = () => {
  return (
    <Routes>
        <Route path='/' element={<LoginPage/>}/>

        <Route path='panel' element={<LayoutAdmin/>}>
          <Route index element={<OfficePage/>}/>
          <Route path="employee" element={<HomePage/>}/>
          <Route path="office" element={<OfficePage/>}/>
          <Route path='office/:id' element={<EmployeesByOffice/>}/>
        </Route>
    </Routes>
 
  )
}

export default RouteApp