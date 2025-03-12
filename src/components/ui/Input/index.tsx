import { ChangeEvent } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.props";

const Input = ({ className, mask, onChange, ...props }: InputProps) => {
  const formatValue = (value: string, pattern: string) => {
    let result = "";
    let index = 0;

    for (let i = 0; i < pattern.length && index < value.length; i++) {
      if (pattern[i] === "#") {
        result += value[index];
        index++;
      } else {
        result += pattern[i];
      }
    }
    return result;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (mask) {
      switch (props.id) {
        case "card":
          value = formatValue(value.substring(0, 16), "#### #### #### ####");
          break;
        case "date":
          value = formatValue(value.substring(0, 4), "##/##");
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
