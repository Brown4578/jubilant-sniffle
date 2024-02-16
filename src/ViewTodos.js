import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";



function ViewTodos() {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([]);
  const [size, setSize] = useState('small');


  const deleteHandler =  (record) => {
    alert("Are  you sure you want to delete this record?");
    axios.delete("http://localhost:8000/todos/"+record?.id);
    window.location.reload();
  }
  const handleEdit = (record) =>{
    console.log(record.object)
    navigate("/add-todo", { state: record });
  }
    const columns = [
   
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: 'Edit Todo',
      key: 'edit',
      dataIndex: 'edit',
      render: (ID, record) => (
    <Button type="primary" size={size}  onClick={()=>handleEdit(record)}>
    {"Edit"}
  </Button>

      ),
    },
    {
      title: 'Edit Todo',
      key: 'edit',
      dataIndex: 'edit',
      render: (ID, record) => (
       <Button type="primary" size={size} onClick={()=>deleteHandler(record)}>
       {"Delete"}
     </Button>
      ),
    },
  
  ];

  useEffect(() => {
    axios.get("http://localhost:8000/todos").then((e) => {
        console.log(e)
      setDataSource(e.data);
    });
  }, []);

  const goToToDoScreen = () => {
    navigate("/add-todo");
  };

  return (
    <div>
      <Button onClick={() => goToToDoScreen()}>Add ToDO</Button>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default ViewTodos;