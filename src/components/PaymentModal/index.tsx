import { FormEvent, useState } from "react";
import Button from "../ui/Button";
import styles from "./PaymentModal.module.scss";
import { PaymentModalProps } from "./PaymentModal.props";
import { FaApple, FaArrowLeft, FaInfoCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import Input from "../ui/Input";
import { CARD_MASK, CVC_MASK, DATE_MASK } from "../../constants";

const PaymentModal = ({ isShown }: PaymentModalProps) => {
  const [card, setCard] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!card || !date || !cvc)
      return toast.error("Please fill in all fields!");
    if (!card.match(CARD_MASK)) return toast.error("Invalid card number!");
    if (!date.match(DATE_MASK)) return toast.error("Invalid expiration date!");
    if (!cvc.match(CVC_MASK)) return toast.error("Invalid cvc code!");

    toast.success("Payment successful!");
  };

  return (
    isShown && (
      <>
        <div className={styles.modalContainer}>
          <div className={styles.paymentContainer}>
            <div className={styles.language}>
              <span>Eng</span>
              <span>Укр</span>
            </div>
            <div className={styles.payment}>
              <div className={styles.credentialsContainer}>
                <div className={styles.subscription}>
                  <button className={styles.checkoutButton}>
                    <FaArrowLeft />
                    Checkout
                  </button>
                  <h1>5 days free</h1>
                  <span>then 299.99 UAH per 14 days</span>
                  <Button color="black">
                    <FaApple />
                    Pay
                  </Button>
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
                      <div>
                        <Input
                          mask="cvc"
                          type="password"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          id="cvc"
                          placeholder="•••"
                        />
                        <button className={styles.infoButton} type="button">
                          <FaInfoCircle fill="gray" />
                        </button>
                      </div>
                    </div>

                    <Button color="green" type="submit">
                      Pay 299.99 UAH
                    </Button>
                  </form>
                  <p className={styles.policy}>
                    You'll have your Plan Pro during 1 year. After this period
                    of time, your plan will be automatically renewed with its
                    original price without any discounts applied.
                  </p>
                </div>
              </div>
              <div className={styles.orderContainer}>
                <h2>{"Order info <= 100 char."}</h2>
                <div className={styles.order}>
                  <h3>{"Description <= 400 char."}</h3>
                  <hr />
                  <h3>Lamel Professional Smart Skin Compact Powder</h3>
                  <span>Пудра для лица</span>
                  <hr />
                </div>
                <div className={styles.summary}>
                  <h2>5 days free</h2>
                  <span>then 299.99 UAH per 14 days</span>
                </div>
              </div>
            </div>
          </div>
          <span>Powered by Solid</span>
        </div>
        <div className={styles.modalBg} />
      </>
    )
  );
};

export default PaymentModal;
