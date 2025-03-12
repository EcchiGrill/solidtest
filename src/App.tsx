import { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/ui/Button";
import { CgSpinner } from "react-icons/cg";
import PaymentModal from "./components/PaymentModal";

const App = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const mouseUpHandler = () => {
    setIsDown(false);
    setIsProcessing(true);
  };

  const mouseDownHandler = () => {
    setIsDown(true);
  };

  const mouseLeaveHandler = () => {
    setIsDown(false);
    if (!isProcessing) setIsProcessing(false);
  };

  return (
    <>
      <main className={styles.container}>
        <div>
          <h1>👇 Click</h1>
          <Button
            className={
              (isDown ? styles.paymentButton_down : "") +
              " " +
              (isProcessing ? styles.paymentButton_up : "")
            }
            color="green"
            onMouseUp={mouseUpHandler}
            onMouseDown={mouseDownHandler}
            onMouseLeave={mouseLeaveHandler}
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
        </div>
      </main>
      <PaymentModal isShown={true} />
    </>
  );
};

export default App;
