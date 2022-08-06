import React from "react";
import styled from "styled-components";

function GlobalLayout({ children }) {
  return <StLayout>{children}</StLayout>;
}

const StLayout = styled.div`
  width: 98vw;
  margin: 0 auto;
  min-width: 550px;
  min-height: calc(100vh - 50px);
  background-color: #eee;
`;

export default GlobalLayout;
