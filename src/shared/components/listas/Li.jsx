import { Link, useLocation } from 'react-router-dom'

const Li = ({name,isOpen,icon,path}) => {
  
  const {pathname} = useLocation();

  return (
    <Link to={`/panel/${path}`}>
      <li className={`flex items-center gap-1 cursor-pointer transition-transform duration-500 hover:translate-x-3   ${pathname ===`/panel/${path}` && "box-shadow-yellow"} `}>
        {icon} 
        {isOpen && name} 
      </li>
    </Link> 
  )
}

export default Li