import Layout from "@/components/Layout";
import styles from "@/styles/Booking.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";

export default function BookingPage() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    telephone: "",
    numInParty: "",
    date: "",
    time: "",
    comment: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const errors = await res.json();
      errors.errors.map((err) => toast.error(err.msg));

      toast.error(errors);
    } else {
      const booking = await res.json(); //get data
      console.log(booking);
      router.push(`/booked`);
      toast.success("All booked");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Layout title="Book a Table">
      <div className={styles.body}>
        <div className={styles.title}>
          <h1>Book a Table</h1>
        </div>
        <p>* = Field is Required</p>
        <ToastContainer />
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grid}>
              <div>
                <label htmlFor="name">* Your Name: </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email">* Your Email: </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="telephone">* Your Phone Number: </label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  value={values.telephone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="numInParty">* Number of Guests </label>
                <select
                  name="numInParty"
                  id="numInParty"
                  onChange={handleInputChange}
                >
                  <option value="0"></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div>
                <label htmlFor="date">* Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={values.date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="time">* Time</label>
                <select name="time" id="time" onChange={handleInputChange}>
                  <option value="0"></option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                  <option value="16:00">16:00</option>
                  <option value="16:30">16:30</option>
                  <option value="17:00">17:00</option>
                  <option value="17:30">17:30</option>
                  <option value="18:00">18:00</option>
                  <option value="18:30">18:30</option>
                  <option value="19:00">19:00</option>
                  <option value="19:30">19:30</option>
                  <option value="20:00">20:00</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="comment">* Comments: </label>
              <textarea
                type="text"
                name="comment"
                id="comment"
                value={values.comment}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <input type="submit" value="Add Event" className="btn" />
          </form>
        </div>
      </div>
    </Layout>
  );
}
