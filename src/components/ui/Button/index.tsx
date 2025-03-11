import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.props";

const Button = ({ className, color, children, ...props }: ButtonProps) => {
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

  return (
    <button
      className={styles.button + " " + getColorStyles() + " " + className}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
