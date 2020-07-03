import React from "react";
import styled from "styled-components";
import MakeDonation from "./MakeDonation";
import Bubble from "./generic/Bubble";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: papayawhip;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DonationWrapper = styled.section``;

export default function () {
  return (
    <Wrapper>
      <DonationWrapper>
        <Bubble>$1,500 still needed to fund the project</Bubble>
        <MakeDonation />
      </DonationWrapper>
    </Wrapper>
  );
}
