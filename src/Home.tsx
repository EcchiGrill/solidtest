import styles from "./Home.module.scss";
import Button from "./components/ui/Button";

const Home = () => {
  return (
    <main className={styles.container}>
      <div>
        <h1>👇 Click</h1>
        <Button color="green">Pay 299.99 UAH</Button>
      </div>
    </main>
  );
};

export default Home;
