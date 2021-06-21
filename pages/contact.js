import Layout from "@/components/Layout";
import styles from "@/styles/Contact.module.scss";

export default function ContactPage() {
  return (
    <Layout>
      <div className={styles.body}>
        <h1>Contact Us</h1>
        <h2>Email</h2>
        <h4>email@email.com</h4>
        <h2>Telephone Number</h2>
        <h4>07123456789</h4>
      </div>
    </Layout>
  );
}
