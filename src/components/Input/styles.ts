import styled from "styled-components";

const StyledInput = styled.input`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 68px;
  background: #fff;
  border-radius: 30px;
  font-size: 18px;
  line-height: 1.44;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.6);
  margin-bottom: 33px;
  @media (max-width: 744px) {
    margin-bottom: 17px;
  }
  @media (max-width: 414px) {
    margin-bottom: 15px;
  }
  &::placeholder {
    color: rgba(117, 108, 108, 0.6);
  }
  &:focus-visible {
    outline-width: 0px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

export { StyledInput };
