import { useInput } from "../../hooks/useInput";
import { IInput } from "../../types";
import { StyledInput } from "../Input/styles";

export const Input = ({ type, placeholder, value, onChange }: IInput) => {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};
