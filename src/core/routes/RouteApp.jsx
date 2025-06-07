import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../modules/admin/auth/LoginPage'
import LayoutAdmin from '../../shared/layout/LayoutAdmin'
import HomePage from '../../modules/admin/dashboard/home/HomePage'
import AboutMe from '../../modules/admin/dashboard/about/AboutMe'

const RouteApp = () => {
  return (

    <Routes>
        <Route path='login' element={<LoginPage/>}/>

 
        <Route path='panel' element={<LayoutAdmin/>}>
          <Route index element={<HomePage/>}/>
          <Route path='home' element={<HomePage />}/>
          <Route path='about' element={<AboutMe/>}/>
          <Route path='contact' element={<h1>Contact</h1>}/>
        </Route>
  

    </Routes>
 
  )
}

export default RouteApp