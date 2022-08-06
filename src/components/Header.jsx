import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";

function Header() {
  const navigate = useNavigate();
  return (
    <StHeader>
      <Button size={"narrow"} type={"small"} onClick={() => navigate("/")}>
        Home
      </Button>
      <span>오늘도 그저 리액트,,,</span>
    </StHeader>
  );
}

const StHeader = styled.header`
  max-width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-bottom: 1px solid black;
`;

export default Header;
