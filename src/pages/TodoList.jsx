import React from "react";
import styled from "styled-components";
import GlobalLayout from "../components/global/GlobalLayout";
import Todos from "../components/Todos";

function TodoList() {
  return (
    <GlobalLayout>
      <StTitle>내 할일</StTitle>
      <Todos />
    </GlobalLayout>
  );
}

const StTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  margin: 0;
  padding: 30px 0 20px 0;
`;

export default TodoList;
