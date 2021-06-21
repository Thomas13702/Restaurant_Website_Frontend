import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";
import Footer from "./Footer";
import styles from "@/styles/Layout.module.scss";
import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
  //layout will wrap content, what ever is wrapped will be the children

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Andika+New+Basic:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      {/* checks to see if we are on the home page */}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Webinar Finder | Find the latest webinars",
  description: "Find the latest webianrs",
  keywords:
    "webinars, learning, teachings, education, business, programming, arts",
};
