import { IOption } from "../../types";
import { styles } from "./styles";
import Select, { ActionMeta } from "react-select";
import { options } from "../Form/Form";

interface IProps {
  value: IOption;
  onChange: (event: IOption | any, actionMeta: ActionMeta<IOption | unknown>) => void;
}

export const CustomSelect = ({ value, onChange }: IProps) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
      isSearchable={false}
      styles={styles}
    />
  );
};
