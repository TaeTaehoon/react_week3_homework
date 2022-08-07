import React, { useEffect } from "react";
import styled from "styled-components";
import { __getTodos } from "../redux/modules/todosSlice";
import { useDispatch, useSelector } from "react-redux";
import TodoCard from "../elements/TodoCard";

function Todos() {
  const data = useSelector((state) => state.todosSlice.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);
  return (
    <StWrap>
      {data.length === 0 ? (
        <p>할일이 없네요!</p>
      ) : (
        data.map((todo) => {
          return <TodoCard key={todo.id} props={todo} />;
        })
      )}
    </StWrap>
  );
}
const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 10px 0;
  }
`;

export default React.memo(Todos);
