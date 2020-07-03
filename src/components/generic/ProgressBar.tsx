import React, { FunctionComponent } from "react";
import styled from "styled-components";
import colors from "colors";

const Wrapper = styled.div`
  position: relative;
  flex: 1;
  height: 14px;
  background-color: ${colors.mint40};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Progress = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 24%;
  background-color: ${colors.mint};
`;

const MoneyInput: FunctionComponent = () => (
  <Wrapper>
    <Progress />
  </Wrapper>
);

export default MoneyInput;
