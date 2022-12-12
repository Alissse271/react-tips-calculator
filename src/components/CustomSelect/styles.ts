import { StylesConfig } from "react-select";
import { IOption } from "../../types";

export const styles: StylesConfig<IOption> = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    borderColor: state.isFocused ? "white" : "white",
    width: "456px",
    height: "68px",
    borderRadius: "30px",
    border: "none",
    boxShadow: "none",
    "@media only screen and (max-width: 744px)": {
      width: "332px",
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    marginLeft: "80px",
    fontSize: "18px",
    lineHeight: 1.44,
    letterSpacing: "-0.3px",
    color: "#756C6C",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    marginRight: "40px",
    padding: 0,
    svg: {
      width: "40px",
      height: "40px",
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "30px",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "30px",
    textAlign: "center",
    padding: 0,
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: "#756C6C",
    backgroundColor: state.isFocused ? "#2ed2c980" : "white",
  }),
};
