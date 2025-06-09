import { FiPlus } from "react-icons/fi"
const AddFloat = ({openModal}) => {
  return (
    <FiPlus  className='absolute cursor-pointer hover:shadow-gray-800 hover:shadow-md bottom-3 right-8 animate-bounce bg-black text-white rounded-full  p-3 text-5xl' 
             onClick={openModal}/>
  )
}

export default AddFloat