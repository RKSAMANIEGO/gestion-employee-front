import { Table } from "antd"
import '../../styles/tableCustom.css';
import { useTheme } from "../../../core/store/Theme/ThemeContext";
import AnimationIn from '../../animations/AnimationIn'
const TableCustom = ({data,columns}) => {

  const {isDark} = useTheme();

  return (
  <AnimationIn direction='bottom'>
    <Table 
        dataSource={data && data}
        columns={columns}
        className= {`${isDark ? 'tableCustomDark': 'tableCustom'}`}
        rowKey={"id"}
        pagination={{pageSize:5}}
    />
  </AnimationIn>
  )
}

export default TableCustom