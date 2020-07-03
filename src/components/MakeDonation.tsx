import React from "react";
import styled from "styled-components";
import colors from "colors";
import Input from "./generic/Input";
import Button from "./generic/Button";

const Wrapper = styled.section`
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  padding: 25px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 4px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 4px 0;

  button {
    border-radius: 0 6px 6px 0;
  }
`;

export default function () {
  return (
    <Wrapper>
      <Title>Only four days left to fund this project</Title>
      <p>Join other 11 other donors who have already supported this project.</p>
      <InputWrapper>
        <Input />
        <Button type="button">Give Now</Button>
      </InputWrapper>
    </Wrapper>
  );
}
