import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Panggo</h1>
      <p>“Too late for second-guessing / Too late to go back to sleep / It’s time to trust my instincts / Close my eyes and leap.”</p>
      <p>— Stephen Schwartz</p>
    </main>
  );
}
