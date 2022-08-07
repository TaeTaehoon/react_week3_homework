import React from "react";
import styled from "styled-components";
import Button from "./Button";

function CommentBox({ user, comment }) {
  return (
    <StContainer>
      <StContents>
        <h3>{user}</h3>
        <p>{comment}</p>
      </StContents>
      <StButtonGruop>
        <Button size="narrow" type="small">
          e
        </Button>
        <Button size="narrow" type="small">
          d
        </Button>
      </StButtonGruop>
    </StContainer>
  );
}

const StContainer = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  margin-bottom: 10px;
`;

const StContents = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 5px;

  h3 {
    margin: 0;
  }
  p {
    margin: 0;
    padding: 10px 0 0 0;
  }
`;

const StButtonGruop = styled.div`
  display: flex;
  width: 90px;
  justify-content: space-around;
`;

export default CommentBox;
