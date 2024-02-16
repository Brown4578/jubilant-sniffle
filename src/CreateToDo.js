import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ToDo() {
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.data.name()
    event.data.status()
    
    };


  const handleViewAllPosts = () => {
    navigate('/view-todos', {replace: true});
  };

  return (
    <div>
      <form onSubmit={() => handleSubmit()}>
        <label>
          Post Name:
          <input type="text" name="name" placeholder="Title" />
          <input type="text" name="name" placeholder="Status"/>
          <input type="text"name="name"placeholder="FirstName"/>
          <input type="text"name="name"placeholder="SecondName"/>
          <input type="text"name="name"placeholder="Surname"/>
          <input type="numbers"name="figures"placeholder="Salary"/>
          <input type="text"name="name"placeholder="Department"/>

        </label>
        <button type="submit">Add</button>
                mbv
        
      </form>
      <button onClick={() => handleViewAllPosts()}>View All</button>
    </div>
  );

};

export default ToDo;
