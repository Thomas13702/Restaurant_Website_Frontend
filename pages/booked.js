import Layout from "@/components/Layout";
import styles from "@/styles/Booked.module.scss";

export default function booked() {
  return (
    <Layout>
      <div className={styles.body}>
        <h1>Your booking has been confirmed!</h1>
        <h2>We look forward to seeing you</h2>
        <p>Your will recieved and email with your booking details</p>
      </div>
    </Layout>
  );
}
