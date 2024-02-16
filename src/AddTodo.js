import React, { useEffect, useState } from "react";
import axios from "axios";
//import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Form, Input } from "antd";


function ToDo(props) {
  console.log("Propsss ", props.state);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  //

  const location = useLocation();
  
  const[data, setData]=useState(location.state?.id)
  
  console.log(data);
  
  //const [initialValueId,setInitialId]= useState([data.id]);
  //console.log(initialValueId);
  

  const handleViewAllPosts = () => {
    navigate("/view-todos", { replace: true });
  };

  const clearFields = () => {
    form.resetFields();
  };


  const onFinish = (values: any) => {
    console.log(values.id);

   if(values.id!=location.state?.id){
    
    axios
      .post("http://localhost:8000/todos", values, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(function (response) {
        alert("Successfully added");
        clearFields();
      })
      .catch(function (error) {
        console.error(error);
      });
   }else{
    //write code to update
    axios
    .put("http://localhost:8000/todos/"+values?.id, values, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then(function (response) {
      alert("Successfully updated");
      clearFields();
    })
    .catch(function (error) {
      console.error(error);
    });
   }
  };

  return (
    <div>
      <Form
        name="wrap"
        labelCol={{
          flex: "110px",
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="ID"
          name="id"
          initialValue={location.state?.id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Title"
          name="title"
          initialValue={location.state?.title}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Status"
          name="status"
          initialValue={location.state?.status}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

      </Form>
      <Form.Item label=" ">
        <Button onClick={handleViewAllPosts}>Viewall</Button>
      </Form.Item>
      
    </div>
  );
}

export default ToDo;
