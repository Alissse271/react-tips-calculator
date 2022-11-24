import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.3px;
  font-size: 24px;
  line-height: 1.46;
  color: #fff;
  width: 100%;
  height: 61px;
  background: #2ed2c9;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export { StyledButton };
