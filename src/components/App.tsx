import React, { useState } from "react";
import styled from "styled-components";
import MakeDonation from "./MakeDonation";
import Bubble from "./generic/Bubble";
import colors from "colors";
import Confetti from "react-confetti";
import moneyFormatter from "util/moneyFormatter";

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

export default function () {
  const donationGoal = 5000;
  const [donors, setDonors] = useState(11);
  const [moneyCollected, setMoneyCollected] = useState(850);
  const [showConfetti, setShowConfetti] = useState(false);
  const moneyNeeded = Math.max(donationGoal - moneyCollected, 0);
  return (
    <Wrapper>
      {showConfetti && (
        <Confetti
          recycle={false}
          gravity={0.2}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}
      <DonationWrapper>
        <Bubble>
          <strong>
            <sup>$</sup> {moneyFormatter.format(moneyNeeded)}
          </strong>{" "}
          still needed to fund the project
        </Bubble>
        <MakeDonation
          donors={donors}
          moneyCollected={moneyCollected}
          donationGoal={donationGoal}
          onDonate={(amount) => {
            setDonors(donors + 1);
            setMoneyCollected(moneyCollected + amount);
            setShowConfetti(true);
          }}
        />
      </DonationWrapper>
    </Wrapper>
  );
}
