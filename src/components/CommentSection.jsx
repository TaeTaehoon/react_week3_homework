import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "../redux/modules/commentsSlice";
import { useParams } from "react-router-dom";
import CommentBox from "../elements/CommentBox";

function CommentSection() {
  const { pickedId } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.commentsSlice.comments);

  useEffect(() => {
    dispatch(__getComments(parseInt(pickedId)));
  }, [dispatch]);
  return (
    <StCommentsWrap>
      {data.map((comment) => {
        return (
          <CommentBox
            user={comment.user}
            comment={comment.comment}
            key={comment.id}
          />
        );
      })}
    </StCommentsWrap>
  );
}

const StCommentsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: calc(100% - 75px);
  padding: 10px 0 40px 0;
  overflow-y: scroll;
  p {
    margin: 0;
    padding: 10px;
  }
`;

export default CommentSection;
