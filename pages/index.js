import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import InfoPanel from "@/components/InfoPanel";
import ThreeImages from "@/components/ThreeImages";

export default function Home() {
  return (
    <Layout>
      <InfoPanel />
      <ThreeImages />
    </Layout>
  );
}
