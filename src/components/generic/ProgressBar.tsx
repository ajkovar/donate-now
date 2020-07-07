import React, { FunctionComponent } from "react";
import styled from "styled-components";
import colors from "colors";

const Container = styled.div`
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
  width: ${({ progress }: Props) => progress}%;
  background-color: ${colors.mint};
  transition: 0.5s width;
`;

type Props = {
  progress: number;
};

const MoneyInput: FunctionComponent<Props> = ({ progress }) => (
  <Container>
    <Progress progress={Math.min(progress, 100)} />
  </Container>
);

export default MoneyInput;
