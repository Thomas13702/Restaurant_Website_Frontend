import Layout from "@/components/Layout";
import Image from "next/image";
import styles from "@/styles/Menu.module.scss";

export default function Menu() {
  return (
    <Layout>
      <div className={styles.body}>
        <div className={styles.title}>
          <h1>Our Menu</h1>
        </div>
        <div className={styles.menu}>
          <Image src={"/images/menu.jpg"} height={1000} width={700} />
        </div>
      </div>
    </Layout>
  );
}
