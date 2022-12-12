import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 61px;

  font-size: 24px;
  line-height: 1.46;
  letter-spacing: -0.3px;
  color: #fff;

  background: #2ed2c9;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export { StyledButton };
