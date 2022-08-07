import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { __postComment } from "../redux/modules/commentsSlice";

function CommentForm() {
  const dispatch = useDispatch();
  const { pickedId } = useParams();
  const [inputs, setInputs] = useState({
    user: "",
    comment: "",
  });
  const err = useSelector((state) => state.commentsSlice.err);
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <StForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(__postComment({ pickedId: parseInt(pickedId), inputs, err }));
        setInputs({ user: "", comment: "" });
      }}
    >
      <Input
        size="midium"
        type="small"
        name="user"
        placeholder="이름 (5자 이내)"
        max="5"
        onChange={onChange}
        value={inputs.user}
      />
      <Input
        size="medium"
        type="small"
        name="comment"
        placeholder="댓글을 추가하세요.(100자 이내)"
        max="100"
        onChange={onChange}
        value={inputs.comment}
      />
      <Button size="midium" type="small">
        추가하기
      </Button>
    </StForm>
  );
}

const StForm = styled.form`
  background-color: #fff;
  width: 100%;
  margin: 0 auto;
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  input:nth-of-type(2) {
    flex-grow: 1;
    margin: 0 20px;
  }
`;

export default CommentForm;
