import React, { useState } from "react";
import styled from "styled-components";
import colors from "colors";
import MoneyInput from "./generic/MoneyInput";
import Button from "./generic/Button";
import ProgressBar from "./generic/ProgressBar";

const Wrapper = styled.section`
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  padding: 25px;
  position: relative;
  padding-top: 50px;
  max-width: 330px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin: 0 0 4px 0;
  font-family: "Poppins", sans-serif;
`;

const P = styled.p`
  color: ${colors.slate};
  font-size: 14px;
`;

const Strong = styled.strong`
  color: ${colors.black};
`;

const InputWrapper = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 4px 0;
  flex: 1;

  button {
    border-radius: 0 6px 6px 0;
  }
`;

type Props = {
  donors: number;
  onDonate: (amount: number) => void;
};

const defaultValue = 50;

export default function ({ donors, onDonate }: Props) {
  const [amount, setAmount] = useState(defaultValue);
  return (
    <Wrapper>
      <ProgressBar />
      <Title>Only four days left to fund this project</Title>
      <P>
        Join the <Strong>{donors}</Strong> other donors who have already
        supported this project.
      </P>
      <InputWrapper>
        <MoneyInput
          value={amount}
          onChange={({ target: { value } }) => setAmount(parseInt(value, 10))}
        />
        <Button type="button" onClick={() => onDonate(amount)}>
          Give Now
        </Button>
      </InputWrapper>
    </Wrapper>
  );
}
