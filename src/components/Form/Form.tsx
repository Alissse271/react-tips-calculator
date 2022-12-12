import { useEffect, useState } from "react";
import { SingleValue } from "react-select";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { Subtitle, Title, StyledForm, TotalAmount } from "./styles";

export const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

export const Form = () => {
  const [total, setTotal] = useState("0.00");
  const [isDisabled, setDisabled] = useState(false);
  const [selectOption, setSelectOption] = useState(options[0]);

  const bill = useInput();
  const persons = useInput();

  useEffect(() => {
    const isDisabled = () => {
      if (bill.value.length && persons.value.length) {
        return false;
      }
      return true;
    };
    setDisabled(isDisabled);
  }, [bill, persons]);

  const handleChangeSelect = (option: SingleValue<typeof selectOption>) => {
    if (option) {
      setSelectOption(option);
    }
  };

  const handleCountTotal = () => {
    const total = (+bill.value + (+bill.value * selectOption.value) / 100) / +persons.value;
    setTotal(total.toFixed(2));
  };

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input type="number" {...bill} placeholder="Enter bill" />
      <Input type="number" {...persons} placeholder="Enter persons" />
      <CustomSelect value={selectOption} onChange={handleChangeSelect} />
      <TotalAmount>Total: {total}$</TotalAmount>
      <Button
        type={"button"}
        label={"Ohhhoooo 🍻"}
        isDisabled={isDisabled}
        onClick={handleCountTotal}
      />
    </StyledForm>
  );
};
