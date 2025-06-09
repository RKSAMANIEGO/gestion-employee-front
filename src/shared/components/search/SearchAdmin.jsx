import { SearchIcon } from '@chakra-ui/icons'
import AnimationIn from '../../animations/AnimationIn'
import { useState } from 'react'

const SearchAdmin = ({placeholder,setDataSearch}) => {

  const [textSearch,setTextSearch] = useState('');

  return (
    <div className="flex   gap-2">
        <AnimationIn direction='right'>
          <input type="text"  onChange={(e)=>setTextSearch(e.target.value)} placeholder={`Buscar por ${placeholder} ...✍️`} className="border-[1px] border-gray-700 w-[100%] py-2 px-5 rounded-md text-gray-600" />
          <SearchIcon  onClick={()=> setDataSearch(textSearch)} color='yellow.600'  p={3}  boxSize={10} border="1px solid" borderColor={'white'} rounded='6' cursor='pointer' _hover={{bg:"yellow.700", color:"white", borderColor:"yellow.700" }}/>
        </AnimationIn>
    </div>
  )
}

export default SearchAdmin