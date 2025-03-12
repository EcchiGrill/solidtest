import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import styles from "./PaymentModal.module.scss";
import { PaymentModalProps } from "./PaymentModal.props";
import { FaApple, FaArrowLeft, FaInfoCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import Input from "../ui/Input";
import { CARD_REGEX, CVC_REGEX, DATE_REGEX } from "../../constants";
import PaymentButton from "../PaymentButton";

const PaymentModal = ({ isShown, goBack }: PaymentModalProps) => {
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const goBackHandler = () => {
    toast.error("Payment cancelled!");
    goBack();
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
  };

  const applePayHandler = () => {
    toast.info("Apple Pay is not supported yet!");
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!card || !date || !cvc) {
      toast.error("Please fill in all fields!");
      setIsProcessing(false);
      return;
    }
    if (!card.match(CARD_REGEX)) {
      toast.error("Invalid card number!");
      setIsProcessing(false);
      return;
    }
    if (!date.match(DATE_REGEX)) {
      toast.error("Invalid expiration date!");
      setIsProcessing(false);
      return;
    }
    if (!cvc.match(CVC_REGEX)) {
      toast.error("Invalid cvc code!");
      setIsProcessing(false);
      return;
    }

    toast.info("Payment in progress!");
    setIsProcessing(true);

    setTimeout(() => {
      toast.success("Payment successful!");
      setIsProcessing(false);
      setCard("");
      setDate("");
      setCvc("");
      goBack();
    }, 2000);
  };

  return (
    isShown && (
      <>
        <main className={styles.modalContainer}>
          <div className={styles.paymentContainer}>
            <div className={styles.language}>
              <button>Eng</button>
              <button>Укр</button>
            </div>
            <div className={styles.payment}>
              <div className={styles.credentialsContainer}>
                <div className={styles.subscription}>
                  <button
                    className={styles.checkoutButton}
                    onClick={goBackHandler}
                  >
                    <FaArrowLeft />
                    Checkout
                  </button>
                  <h1>5 days free</h1>
                  <span>then 299.99 UAH per 14 days</span>
                  <Button color="black" onClick={applePayHandler}>
                    <FaApple />
                    Pay
                  </Button>
                </div>

                <div className={styles.separator}>
                  <span>or pay with a card</span>
                </div>

                <div className={styles.credentials}>
                  <form onSubmit={submitHandler}>
                    <div className={styles.credContainer}>
                      <label htmlFor="card">Card Number</label>
                      <Input
                        mask="card"
                        value={card}
                        onChange={(e) => setCard(e.target.value)}
                        id="card"
                        placeholder="1234 1234 1234 1234"
                      />
                    </div>

                    <div className={styles.dateCvcContainer}>
                      <div className={styles.credContainer}>
                        <label htmlFor="date">Expiration Date</label>
                        <Input
                          mask="date"
                          id="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          placeholder="MM/YY"
                        />
                      </div>
                      <div className={styles.credContainer}>
                        <label htmlFor="cvc">CVC</label>
                        <div className={styles.cvcContainer}>
                          <Input
                            mask="cvc"
                            type="password"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            id="cvc"
                            placeholder="•••"
                          />
                          <button className={styles.infoButton} type="button">
                            <FaInfoCircle fill="#B0B4BE" size={20} />
                          </button>
                        </div>
                      </div>
                    </div>

                    <PaymentButton
                      color="green"
                      type="submit"
                      isProcessing={isProcessing}
                      isDown={isDown}
                      onMouseUp={mouseUpHandler}
                      onMouseDown={mouseDownHandler}
                      onMouseLeave={mouseLeaveHandler}
                    >
                      Pay 299.99 UAH
                    </PaymentButton>
                  </form>
                  <p className={styles.policy}>
                    You'll have your <b>Plan Pro during 1 year</b>. After this
                    period of time, your plan will be{" "}
                    <b>automatically renewed</b> with its original price without
                    any discounts applied.
                  </p>
                </div>
              </div>
              <div className={styles.orderContainer}>
                <h2>{"Order info <= 100 char."}</h2>
                <div className={styles.order}>
                  <div className={styles.description}>
                    <h3>{"Description <= 400 char."}</h3>
                  </div>
                  <div className={styles.product}>
                    <h3>Lamel Professional Smart Skin Compact Powder</h3>
                    <span>Пудра для лица</span>
                  </div>
                </div>
                <div className={styles.summary}>
                  <h3>5 days free</h3>
                  <span>then 299.99 UAH per 14 days</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.copyright}>
            Powered by <b>Solid</b>
          </div>
        </main>
        <div className={styles.modalBg} />
      </>
    )
  );
};

export default PaymentModal;
