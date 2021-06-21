import Link from "next/link";
import styles from "@/styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Thomas13702 {new Date().getFullYear()}</p>
    </footer>
  );
}
