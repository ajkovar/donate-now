import React, { FunctionComponent } from "react";
import styled from "styled-components";
import colors from "colors";

const height = "10px";

const Wrapper = styled.section`
  background-color: ${colors.ocean40};
  position: relative;
  margin-bottom: ${height};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  color: ${colors.ocean80};

  ::after {
    content: " ";
    position: absolute;
    bottom: -${height};
    right: 10px;
    border-left: ${height} solid transparent;
    border-right: ${height} solid transparent;
    border-top: ${height} solid ${colors.ocean40};
  }
`;

const Bubble: FunctionComponent = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Bubble;
