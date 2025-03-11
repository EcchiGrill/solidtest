import { useState, MouseEvent } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

const Button = ({
  className,
  color,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const getColorStyles = () => {
    switch (color) {
      case "black":
        return styles.blackStyle;
      case "green":
        return styles.greenStyle;
      default:
        return;
    }
  };

  const getPressedStyles = () => {
    switch (color) {
      case "black":
        return styles.blackStyle_pressed;
      case "green":
        return styles.greenStyle_pressed;
      default:
        return;
    }
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true);
    onClick?.(e);
  };

  return (
    <button
      className={
        styles.button +
        " " +
        getColorStyles() +
        " " +
        (isPressed && getPressedStyles()) +
        " " +
        className
      }
      onClick={clickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
