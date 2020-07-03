import React, { FunctionComponent, InputHTMLAttributes } from "react";
import Input from "./Input";
import styled from "styled-components";
import colors from "colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  input {
    padding-left: 32px;
    flex: 1;
  }
`;

const Dollar = styled.div`
  position: absolute;
  left: 16px;
  color: ${colors.slate60};
  font-size: 18px;
`;

const MoneyInput: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <Wrapper>
    <Dollar>$</Dollar>
    <Input type="number" {...props} />
  </Wrapper>
);

export default MoneyInput;
