import React, { useState } from "react";
import styled from "styled-components";
import colors from "colors";
import MoneyInput from "./generic/MoneyInput";
import Button from "./generic/Button";
import ProgressBar from "./generic/ProgressBar";

const Container = styled.section`
  background: ${colors.white};
  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.35);
  padding: 25px;
  position: relative;
  padding-top: 50px;
  max-width: 330px;
  overflow: hidden;
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
`;

const Error = styled.strong`
  color: ${colors.strawberry120};
`;

const Success = styled.strong`
  color: ${colors.mint};
`;

type Props = {
  donors: number;
  donationGoal: number;
  moneyCollected: number;
  onDonate: (amount: number) => void;
};

const defaultValue = 50;

const validate = (amount: number) =>
  amount < 5 ? "Donation must be greater than $5" : null;

export default function ({
  donors,
  onDonate,
  donationGoal,
  moneyCollected,
}: Props) {
  const [amount, setAmount] = useState(defaultValue);
  const [donationMade, setDonationMade] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Container>
      <ProgressBar progress={(moneyCollected / donationGoal) * 100} />
      <Title>Only four days left to fund this project</Title>
      <P>
        Join the <Strong>{donors}</Strong> other donors who have already
        supported this project.
      </P>
      <InputWrapper>
        <MoneyInput
          value={amount}
          onChange={({ target: { value } }) => {
            const amount = Number(parseFloat(value).toFixed(2));
            setAmount(amount);
            setError(validate(amount));
            setDonationMade(false);
          }}
        />
        <Button
          type="button"
          onClick={() => {
            onDonate(amount);
            setDonationMade(true);
          }}
          disabled={!!error}
        >
          Give Now
        </Button>
      </InputWrapper>
      {error && <Error>{error}</Error>}
      {donationMade && <Success>Thank you!</Success>}
    </Container>
  );
}
