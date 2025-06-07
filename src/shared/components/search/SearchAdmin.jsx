import { SearchOutlined } from "@ant-design/icons"
import AnimationIn from '../../animations/AnimationIn'

const SearchAdmin = ({placeholder}) => {
  return (
    <div className="flex gap-2">
        <AnimationIn direction='right'>
          <input type="text" placeholder={`Buscar por ${placeholder} ...✍️`} className="border-[1px] border-gray-700 w-[100%] py-2 px-5 rounded-md" />
           <SearchOutlined className="cursor-pointer border-[1px] border-gray-700 px-3 rounded-md transition-all duration-500 hover:bg-black hover:text-white hover:border-white" />
        </AnimationIn>
    </div>
  )
}

export default SearchAdmin