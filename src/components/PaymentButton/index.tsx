import styles from "./PaymentButton.module.scss";
import Button from "../ui/Button";
import { PaymentButtonProps } from "./PaymentButton.props";
import { CgSpinner } from "react-icons/cg";

const PaymentButton = ({
  isProcessing,
  isDown,
  ...props
}: PaymentButtonProps) => {
  return (
    <Button
      className={
        (isDown ? styles.button_down : "") +
        " " +
        (isProcessing ? styles.button_up : "")
      }
      color="green"
      disabled={isProcessing}
      {...props}
    >
      {isProcessing ? (
        <>
          <span
            className={
              styles.processingText +
              " " +
              (isProcessing ? styles.processingText_up : "")
            }
          >
            <CgSpinner className={styles.spinner} size={25} />
            Processing payment
          </span>
          <span className={isProcessing ? styles.payText_up : ""}>
            Pay 299.99 UAH
          </span>
        </>
      ) : (
        "Pay 299.99 UAH"
      )}
    </Button>
  );
};

export default PaymentButton;
