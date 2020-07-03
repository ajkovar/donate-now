import styled from "styled-components";
import colors from "colors";

export default styled.input`
  font-size: 22px;
  font-weight: bold;
  border-radius: 6px 0 0 6px;
  height: 50px;
  box-sizing: border-box;
  padding: 0 12px;
  width: 100%;
  border: 2px solid ${colors.slate40};
  border-right: 0;

  :focus {
    outline: 0;
  }
  :first-line {
    display: inline-block;
  }
`;
