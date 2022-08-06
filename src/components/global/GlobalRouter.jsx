import React from "react";
import { Routes, Route } from "react-router-dom";
import AddTodo from "../../pages/AddTodo";
import Home from "../../pages/Home";
import PickedTodo from "../../pages/PickedTodo";
import TodoList from "../../pages/TodoList";

function GlobalRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addTodo" element={<AddTodo />} />
        <Route path="/todoList" element={<TodoList />} />
        <Route path="/todoList/:id" element={<PickedTodo />} />
      </Routes>
    </>
  );
}

export default GlobalRouter;
