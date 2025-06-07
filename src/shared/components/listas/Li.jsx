import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Li = ({name,isOpen,icon,path}) => {
  
  const {pathname} = useLocation(); //hover:drop-shadow-lg hover:box-shadow-yellow
  console.log(pathname);

  return (
    <Link to={`/panel/${path}`}>
      <li className={`flex gap-1 cursor-pointer transition-transform duration-500 hover:translate-x-3   ${pathname ===`/panel/${path}` && "box-shadow-yellow"} `}>
        {icon} 
        {isOpen && name} 
      </li>
    </Link> 
  )
}

export default Li