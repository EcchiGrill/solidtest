import { useState } from "react";
import styles from "./App.module.scss";
import PaymentModal from "./components/PaymentModal";
import PaymentButton from "./components/PaymentButton";

const App = () => {
  const [isShown, setIsShown] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const goBack = () => {
    setIsProcessing(false);
    setIsShown(false);
  };

  const mouseDownHandler = () => {
    setIsDown(true);
  };

  const mouseLeaveHandler = () => {
    setIsDown(false);
    if (!isProcessing) setIsProcessing(false);
  };

  const mouseUpHandler = () => {
    setIsDown(false);
    setIsProcessing(true);
    setTimeout(() => {
      setIsShown(true);
    }, 2000);
  };

  return (
    <>
      <main className={styles.container}>
        <div>
          <h1>👇 Click</h1>
          <PaymentButton
            isProcessing={isProcessing}
            isDown={isDown}
            onMouseUp={mouseUpHandler}
            onMouseDown={mouseDownHandler}
            onMouseLeave={mouseLeaveHandler}
          />
        </div>
      </main>
      <PaymentModal isShown={isShown} goBack={goBack} />
    </>
  );
};

export default App;
