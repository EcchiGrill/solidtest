import { useState } from "react";
import styles from "./Home.module.scss";
import Button from "./components/ui/Button";
import { CgSpinner } from "react-icons/cg";

const Home = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const mouseUpHandler = () => {
    setIsProcessing(true);
  };

  return (
    <main className={styles.container}>
      <div>
        <h1>👇 Click</h1>
        <Button
          className={isProcessing ? styles.paymentButton_up : ""}
          color="green"
          onMouseUp={mouseUpHandler}
        >
          {isProcessing ? (
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
          ) : (
            <span className={isProcessing ? styles.payText_up : ""}>
              Pay 299.99 UAH
            </span>
          )}
        </Button>
      </div>
    </main>
  );
};

export default Home;
