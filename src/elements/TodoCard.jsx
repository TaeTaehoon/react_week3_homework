import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { __deleteTodo } from "../redux/modules/todoSlice";

function TodoCard({ props }) {
  const { id, user, title } = props;
  const dispatch = useDispatch();
  const onClick = (e) => {
    e.stopPropagation();
    dispatch(__deleteTodo(id));
  };
  const navigate = useNavigate();
  return (
    <StCard
      onClick={() => {
        navigate(`/todoList/${id}`, { replace: true });
      }}
    >
      <StContents>
        <p>{title}</p>
        <p>작성자: {user}</p>
      </StContents>

      <Button size="narrow" type="small" onClick={onClick}>
        삭제
      </Button>
    </StCard>
  );
}

const StCard = styled.div`
  width: 100%;
  height: 150px;
  background-color: #fff;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

const StContents = styled.div`
  padding: 10px;
  font-size: 1.2rem;
`;
export default TodoCard;
