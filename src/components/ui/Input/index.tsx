import { ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";
import { CARD_MASK, NUMBERS_REGEX, DATE_MASK } from "../../../constants";
import { formatValue } from "../../../helpers/formatValue";

const Input = ({ className, mask, onChange, ...props }: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(NUMBERS_REGEX, "");

    if (mask) {
      switch (props.id) {
        case "card":
          value = formatValue(value.substring(0, 16), CARD_MASK);
          break;
        case "date":
          value = formatValue(value.substring(0, 4), DATE_MASK);
          break;
        case "cvc":
          value = value.substring(0, 3);
          break;
      }
    }

    e.target.value = value;
    onChange?.(e);
  };

  return (
    <input
      className={styles.input + " " + className}
      onChange={handleChange}
      {...props}
    />
  );
};

export default Input;
