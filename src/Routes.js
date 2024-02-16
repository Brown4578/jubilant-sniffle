import React from "react";
import ToDo from "./AddTodo";
import ViewTodos from "./ViewTodos";
import { Routes, Route } from "react-router-dom";


function RouteManager() {
  /*const navigate = useNavigate();*/
  return (
    <div>
      {/* <button onClick={() => navigate(-1)}>go back</button> */}
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<ToDo />} />
        <Route exact path="/view-todos" element={<ViewTodos />} />
        <Route exact path="/add-todo" element={<ToDo />} />
       
        
      </Routes>
    </div>
  );
}

export default RouteManager;
