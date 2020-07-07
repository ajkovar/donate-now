import React, { FunctionComponent, InputHTMLAttributes } from "react";
import Input from "./Input";
import styled from "styled-components";
import colors from "colors";

const Dollar = styled.div`
  position: absolute;
  left: 16px;
  color: ${colors.slate60};
  font-size: 18px;
`;

const MoneyInput: FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <div className={props.className}>
    <Input type="number" {...props} />
    <Dollar>$</Dollar>
  </div>
);

export default styled(MoneyInput)`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;

  ${Input} {
    padding-left: 32px;
    flex: 1;
  }
`;
