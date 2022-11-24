import { IButton } from "../../types";
import { StyledButton } from "../Button/styles";

export const Button = ({ type, label, disabled, onClick }: IButton) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {" "}
      {label}
    </StyledButton>
  );
};
