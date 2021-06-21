import Link from "next/link";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={styles.card}>
          <h1>The Restaurant</h1>
          <p>19 New Bridge Street, London, EC4V 6DB</p>
        </div>
        <div className={styles.card}>
          <h2>Hours</h2>
          <h3>Monday - Saturday</h3>
          <p>11:00 - 23:00, Food 12:00 - 20:00</p>
          <h3>Sunday</h3>
          <p>11:00 - 16:00, Food 12:00 - 14:00</p>
        </div>
      </div>

      <p>Copyright &copy; Thomas13702 {new Date().getFullYear()}</p>
    </footer>
  );
}
