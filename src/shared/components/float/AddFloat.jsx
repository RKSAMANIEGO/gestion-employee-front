import { PlusOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import React from 'react'

const AddFloat = () => {
  return (
    <Tooltip title="Agregar" placement="left">
         <PlusOutlined className='absolute bottom-3 right-8 animate-bounce bg-black text-white rounded-full p-4'/>
    </Tooltip>
   
  )
}

export default AddFloat