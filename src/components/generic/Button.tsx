import styled from "styled-components";
import colors from "colors";

export default styled.button`
  font-weight: bold;
  border-radius: 6px;
  height: 50px;
  cursor: pointer;
  padding: 0 12px;
  border: 0;
  background-color: ${colors.ocean};
  color: ${colors.white};

  :hover {
    opacity: 0.9;
  }

  :active {
    opacity: 0.8;
  }

  :focus {
    outline: 0;
  }
`;
