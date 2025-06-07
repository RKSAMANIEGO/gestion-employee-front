import AddFloat from '../../../../shared/components/float/AddFloat'
import SearchAdmin from '../../../../shared/components/search/SearchAdmin'
import TableCustom from '../../../../shared/components/table/TableCustom'
import TitleSection from '../../../../shared/components/Title/TitleSection'
import {ColumnsHome} from '../../../../shared/utils/ColumnsHome'
const HomePage = () => {

  const data =[
    {id:1 , name:"enrike", lastname:"samaniego",email:"enrike@gmail.com"},
    {id:2 , name:"keler", lastname:"guzman",email:"keler@gmail.com"},
    {id:3 , name:"rod", lastname:"perez",email:"rod@gmail.com"},
    {id:4 , name:"enrike", lastname:"samaniego",email:"enrike@gmail.com"},
    {id:5 , name:"keler", lastname:"guzman",email:"keler@gmail.com"},
    {id:6 , name:"rod", lastname:"perez",email:"rod@gmail.com"}
  ]

  return (
    <div className="flex flex-col gap-4">
      <TitleSection title="Gestion de Home"/>
      <SearchAdmin placeholder='secciones'/>
      <TableCustom data={data} columns={ColumnsHome()}/>
      <AddFloat/>
    </div>
  )
}

export default HomePage