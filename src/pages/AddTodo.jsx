import React from "react";
import GlobalLayout from "../components/global/GlobalLayout";
import TodoForm from "../components/TodoForm";

function AddTodo() {
  return (
    <GlobalLayout>
      <TodoForm />
    </GlobalLayout>
  );
}

export default AddTodo;
