import React from "react";
import styled, { css } from "styled-components";

function Button(props) {
  return (
    <StButton onClick={props.onClick} {...props}>
      {props.children}
    </StButton>
  );
}

const StButton = styled.button`
  cursor: pointer;
  border: 1px solid black;

  ${({ size }) => {
    switch (size) {
      case "wide":
        return css`
          width: 100%;
          border-radius: 15px;
        `;
      case "medium":
        return css`
          width: 80px;
          border-radius: 10px;
        `;
      case "narrow":
        return css`
          width: 35px;
          border-radius: 5px;
        `;
      default:
        return css`
          width: 120px;
          border-radius: 10px;
        `;
    }
  }}
  ${({ type }) => {
    switch (type) {
      case "long":
        return css`
          height: 100%;
        `;
      case "midium":
        return css`
          height: 80px;
        `;
      case "small":
        return css`
          height: 35px;
        `;
      default:
        return css`
          height: 120px;
        `;
    }
  }}
`;

export default Button;
