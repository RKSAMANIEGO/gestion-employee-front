import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space } from "antd";

export const ColumnsHome = () => [
        {
            title:"id",
            dataIndex:"id",
            key:"id"
        },
        {
            title:"name",
            dataIndex:"name",
            key:"name"
        },
        {
            title:"lastname",
            dataIndex:"lastname",
            key:"lastname"
        },
        {
            title:"email",
            dataIndex:"email",
            key:"email"
        },
        {
            title:"options",
            render:(_,record)=>(
                <Space>
                    <EditOutlined className="text-white bg-yellow-600 p-1 rounded-sm" onClick={()=>console.log("El registro "+record.id+" Actualizado")}/>
                    <DeleteOutlined className="text-white bg-red-600 p-1 rounded-sm" onClick={()=>console.log("El registro "+record.id+" Eliminado")}/>
                </Space>
            )
        }
    

]
