import React, { useState } from "react";
import styled, { css } from "styled-components";
import CommentForm from "./CommentForm";
import CommentSection from "./CommentSection";

function Comments() {
  const [isActive, setIsActive] = useState(false);
  const onActive = () => {
    setIsActive(!isActive);
  };
  return (
    <StContainer active={isActive}>
      <h2 onClick={onActive}>
        {isActive === true ? "눌러서 창 닫기" : "눌러서 댓글 보기"}
      </h2>
      <CommentForm />
      <CommentSection />
    </StContainer>
  );
}

const StContainer = styled.div`
  position: absolute;

  width: 100%;
  bottom: 0px;
  padding: 15px 0;
  transition: all 0.6s;

  ${({ active }) => {
    return active === true
      ? css`
          height: 700px;
        `
      : css`
          height: 65px;
        `;
  }}
  h2 {
    width: 200px;
    height: 50px;
    margin: 0;
    text-align: center;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
  }
`;

export default Comments;
