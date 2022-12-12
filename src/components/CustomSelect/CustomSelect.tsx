import { styles } from "./styles";
import Select from "react-select";
import { options } from "../Form/Form";
import { IOption } from "../../types";

interface IProps {
  value: IOption;
  onChange: (event: IOption | null) => void;
}

export const CustomSelect = ({ value, onChange }: IProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      isSearchable={false}
      styles={styles}
      isMulti={false}
    />
  );
};
