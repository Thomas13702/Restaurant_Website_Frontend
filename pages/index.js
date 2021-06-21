import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import InfoPanel from "@/components/InfoPanel";
import SingleImage from "@/components/SingleImage";
import ThreeImages from "@/components/ThreeImages";
import VisitUs from "@/components/VisitUs";

export default function Home() {
  return (
    <Layout>
      <InfoPanel />
      <SingleImage />
      <ThreeImages />
      <VisitUs />
    </Layout>
  );
}
