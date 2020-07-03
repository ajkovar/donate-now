import React, { FunctionComponent } from "react";
import styled from "styled-components";
import colors from "colors";

const height = 10;

const Wrapper = styled.section`
  background-color: ${colors.ocean40};
  position: relative;
  margin-bottom: ${height + 4}px;
  padding: 6px 12px 8px 12px;
  border-radius: 8px;
  font-size: 13px;
  color: ${colors.ocean80};

  ::after {
    content: " ";
    position: absolute;
    bottom: -${height}px;
    right: 24px;
    border-left: ${height}px solid transparent;
    border-right: ${height}px solid transparent;
    border-top: ${height}px solid ${colors.ocean40};
  }
`;

const Bubble: FunctionComponent = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Bubble;
