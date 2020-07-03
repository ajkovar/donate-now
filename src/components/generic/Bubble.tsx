import React, { FunctionComponent } from "react";
import styled from "styled-components";

const ocean40 = "#e3ebfc";
const ocean80 = "#5884ea";
const height = "10px";

const Wrapper = styled.section`
  background-color: ${ocean40};
  position: relative;
  margin-bottom: ${height};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  color: ${ocean80};

  ::after {
    content: " ";
    position: absolute;
    bottom: -${height};
    right: 10px;
    border-left: ${height} solid transparent;
    border-right: ${height} solid transparent;
    border-top: ${height} solid ${ocean40};
  }
`;

const Bubble: FunctionComponent = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Bubble;
