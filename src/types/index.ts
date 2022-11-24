import { ChangeEvent } from "react";

export interface IOption {
  value: number;
  label: string;
}
export interface IButton {
  type: "button" | "submit" | "reset" | undefined;
  label: string | number;
  disabled: boolean;
  onClick: () => void;
}

export interface IInput {
  type: "number";
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
