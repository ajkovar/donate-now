import React, { useState } from "react";
import styled from "styled-components";
import MakeDonation from "./MakeDonation";
import Bubble from "./generic/Bubble";
import colors from "colors";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.slate20};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "IBM Plex Sans", sans-serif;
`;

const DonationWrapper = styled.section`
  margin: 0 15px;
`;

const moneyFormatter = new Intl.NumberFormat("en-IN", {
  style: "decimal",
});

export default function () {
  const [donors, setDonors] = useState(11);
  const [moneyNeeded, setMoneyNeeded] = useState(1500);
  return (
    <Wrapper>
      <DonationWrapper>
        <Bubble>
          <strong>
            <sup>$</sup> {moneyFormatter.format(moneyNeeded)}
          </strong>{" "}
          still needed to fund the project
        </Bubble>
        <MakeDonation
          donors={donors}
          onDonate={(amount) => {
            console.log(amount);
            setDonors(donors + 1);
            setMoneyNeeded(Math.max(moneyNeeded - amount, 0));
          }}
        />
      </DonationWrapper>
    </Wrapper>
  );
}
