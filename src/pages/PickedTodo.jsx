import React, { useEffect, useState } from "react";
import GlobalLayout from "../components/global/GlobalLayout";
import { __patchTodo, __getTodo } from "../redux/modules/todoSlice";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../components/Comments";
import styled from "styled-components";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";

function PickedTodo() {
  const { pickedId } = useParams();
  const navigate = useNavigate();
  const data = useSelector((state) => state.todoSlice.todo);
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [newBody, setNewBody] = useState("");
  const onChange = (e) => {
    setNewBody(e.target.value);
  };
  const onEdit = () => {
    if (isEdit === true) {
      dispatch(__patchTodo({ pickedId: parseInt(pickedId), newBody }));
    }

    setIsEdit(!isEdit);
  };

  useEffect(() => {
    dispatch(__getTodo(parseInt(pickedId)));
  }, [dispatch, pickedId]);

  return (
    <GlobalLayout>
      <SttopWrapper>
        id:{data.id}
        <span onClick={() => navigate("/todoList")}>이전으로</span>
      </SttopWrapper>
      <StTitle>{data.title}</StTitle>
      <StBody>
        {isEdit === false ? (
          data.body
        ) : (
          <TextArea
            name="newBody"
            placeholder="수정할 내용을 입력하세요"
            size="wide"
            rows="20"
            max="200"
            onChange={onChange}
            defaultValue={data.body}
          />
        )}
      </StBody>
      <Button size="wide" type="small" onClick={onEdit}>
        {isEdit === false ? "수정하기" : "저장!"}
      </Button>
      <Comments />
    </GlobalLayout>
  );
}

const SttopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
  font-size: 1.6rem;
`;

const StTitle = styled.h1``;
const StBody = styled.section`
  display: flex;
  justify-content: center;
  height: 311px;
`;
export default PickedTodo;
