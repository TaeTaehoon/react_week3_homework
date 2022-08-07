import React from "react";
import styled, { css } from "styled-components";

function TextArea(props) {
  function numberMaxLength(e) {
    if (e.target.textLength > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }
  return (
    <StTextArea
      name={props.name}
      placeholder={props.placeholder}
      maxLength={props.max}
      rows={props.rows}
      onInput={numberMaxLength}
      onChange={props.onChange}
      value={props.value}
      defaultValue={props.defaultValue}
      required
      {...props}
    />
  );
}

const StTextArea = styled.textarea`
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
          border-radius: 5px;
        `;
      default:
        return css`
          width: 120px;
        `;
    }
  }}
`;

export default TextArea;
