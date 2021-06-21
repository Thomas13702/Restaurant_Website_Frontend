import Image from "next/image";
import styles from "@/styles/ThreeImages.module.scss";

export default function ThreeImages() {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <Image
          className={styles.image}
          src={"/images/food.jpg"}
          width={500}
          height={500}
          alt="A burger"
        />
        <h2>First Class Dining</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspiciatis cum quidem aut pariatur quod.
        </p>
      </div>
      <div className={styles.card}>
        <Image
          className={styles.immage}
          src={"/images/drinks.jpg"}
          width={500}
          height={500}
          alt="People drinking cocktails"
        />
        <h2>World Class Drinks</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspiciatis cum quidem aut pariatur quod.
        </p>
      </div>
      <div className={styles.card}>
        <Image
          className={styles.immage}
          src={"/images/bar.jpg"}
          width={500}
          height={500}
          alt="A bar"
        />
        <h2>Ecstatic Atmosphere</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          perspiciatis cum quidem aut pariatur quod.
        </p>
      </div>
    </div>
  );
}
