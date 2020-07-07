import styled from "styled-components";
import colors from "colors";

export default styled.button`
  font-weight: bold;
  border-radius: 0 6px 6px 0;
  height: 50px;
  cursor: pointer;
  padding: 0 16px;
  border: 0;
  background-color: ${colors.mint};
  color: ${colors.white};
  font-size: 15px;

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.8;
  }

  :focus {
    outline: 0;
  }

  :disabled {
    opacity: 0.4;
  }
`;
