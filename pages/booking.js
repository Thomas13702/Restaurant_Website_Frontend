import Layout from "@/components/Layout";
import styles from "@/styles/Booking.module.scss";
import { useState } from "react";

export default function BookingPage() {
  const [booking, setBooking] = useState({
    name: "",
    email: "",
    telephone: "",
    numInParty: "",
    date: "",
    time: "",
    comment: "",
  });

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <Layout title="Book a Table">
      <div className={styles.body}>
        <div className={styles.title}>
          <h1>Book a Table</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" />
          </form>
        </div>
      </div>
    </Layout>
  );
}
