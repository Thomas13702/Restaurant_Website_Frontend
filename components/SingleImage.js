import Image from "next/image";
import styles from "@/styles/SingleImage.module.css";

export default function SingleImage() {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Image
          src={"/images/rooftop-bar1.jpg"}
          height={500}
          width={700}
          alt="roof top bar"
        />
        <div className={styles.text}>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            blanditiis tempora doloribus quisquam eligendi corporis?
          </h4>
        </div>
      </div>
    </div>
  );
}
