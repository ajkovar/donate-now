import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: papayawhip;
`;

function App() {
  return <Wrapper>Hello world</Wrapper>;
}

export default App;
