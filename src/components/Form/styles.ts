import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 459px;

  margin: 0 auto;
  padding-top: 203px;
  padding-bottom: 138px;

  @media (max-width: 744px) {
    width: 332px;
    padding-top: 236px;
    padding-bottom: 316px;
  }
  @media (max-width: 414px) {
    padding-top: 241px;
    padding-bottom: 91px;
  }
`;
const Title = styled.h1`
  margin-bottom: 45px;

  font-size: 40px;
  line-height: 1.45;
  text-align: center;
  letter-spacing: -0.3px;

  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const Subtitle = styled.h3`
  margin-bottom: 45px;

  font-size: 32px;
  line-height: 1.18;
  text-align: center;
  letter-spacing: -0.3px;
  color: rgba(117, 108, 108, 0.57);

  @media (max-width: 744px) {
    font-size: 24px;
  }
`;
const TotalAmount = styled.p`
  align-self: flex-start;

  margin: 45px 0;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.46;
  letter-spacing: -0.3px;

  @media (max-width: 414px) {
    font-size: 18px;
  }
`;

export { Title, Subtitle, StyledForm, TotalAmount };
