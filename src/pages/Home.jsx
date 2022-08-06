import React from "react";
import GlobalLayout from "../components/global/GlobalLayout";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
  const navigate = useNavigate();
  return (
    <GlobalLayout>
      <StTitle>무엇을 할까요?</StTitle>
      <StWrap>
        <Button
          onClick={() => navigate("/addTodo")}
          size={"wide"}
          type={"midium"}
        >
          할일 기록하기
          <span>{`->`}</span>
        </Button>
        <Button
          onClick={() => navigate("/todoList")}
          size={"wide"}
          type={"midium"}
        >
          Todo List
          <span>{`->`}</span>
        </Button>
      </StWrap>
    </GlobalLayout>
  );
}
const StTitle = styled.h1`
  margin: 0;
  padding: 60px 0 30px 0;
  font-size: 3rem;
  font-weight: lighter;
`;

const StWrap = styled.div`
  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    font-size: 1.4rem;
    padding: 20px;

    span {
      color: red;
    }
  }
`;
export default Home;
