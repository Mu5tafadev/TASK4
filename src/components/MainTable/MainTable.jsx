import { Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Describtion",
    dataIndex: "describtion",
    key: "describtion",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];
const data = [
  {
    id: "1",
    title: "iphone 12pro",
    describtion: "an apple mobile which is.....",
    price: "$12000",
    action: "",
  },
  {
    id: "2",
    title: "iphone 13pro",
    describtion: "an apple mobile which is.....",
    price: "$14000",
    action: "",
  }
,
  {
    id: "3",
    title: "iphone 14pro",
    describtion: "an apple mobile which is.....",
    price: "$15000",
    action: "",
  }
];
const MainTable = () => <Table columns={columns} dataSource={data} />;
export default MainTable;
