import React from "react";
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

export default function () {
  return (
    <Wrapper>
      <DonationWrapper>
        <Bubble>
          <strong>
            <sup>$</sup>1,500
          </strong>{" "}
          still needed to fund the project
        </Bubble>
        <MakeDonation />
      </DonationWrapper>
    </Wrapper>
  );
}
