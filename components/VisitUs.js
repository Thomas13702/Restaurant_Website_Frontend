import styles from "@/styles/VisitUs.module.scss";

export default function VisitUs() {
  return (
    <div className={styles.body}>
      <div className={styles.text}>
        <div className={styles.address}>
          <h1>Visit Us</h1>
          <h3>19 New Bridge Street, London",EC4V 6DB</h3>
        </div>

        <hr className={styles.hr} />
        <div className={styles.hours}>
          <h2>Hours</h2>
          <h3>Monday - Saturday</h3>
          <p>11:00 - 23:00, Food 12:00 - 20:00</p>
          <h3>Sunday</h3>
          <p>11:00 - 16:00, Food 12:00 - 14:00</p>
        </div>
      </div>
    </div>
  );
}
