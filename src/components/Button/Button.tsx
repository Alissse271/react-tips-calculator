import { StyledButton } from "../Button/styles";

export interface IButton {
  type: "button" | "submit" | "reset";
  label: string;
  isDisabled: boolean;
  onClick: () => void;
}

export const Button = ({ type, label, isDisabled, onClick }: IButton) => {
  return (
    <StyledButton type={type} disabled={isDisabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
