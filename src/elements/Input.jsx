import React from "react";
import styled, { css } from "styled-components";

function Input(props) {
  function numberMaxLength(e) {
    if (e.target.textLength > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }
  return (
    <StInput
      name={props.name}
      placeholder={props.placeholder}
      maxLength={props.max}
      onInput={numberMaxLength}
      value={props.value}
      required
      {...props}
    ></StInput>
  );
}

const StInput = styled.input`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;

  ${({ size }) => {
    switch (size) {
      case "wide":
        return css`
          width: 100%;
        `;
      case "medium":
        return css`
          width: 80px;
        `;
      case "narrow":
        return css`
          width: 35px;
        `;
      default:
        return css`
          width: 120px;
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

export default Input;
