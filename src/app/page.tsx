import styles from "./page.module.css";

import Banner from "../components/Banner/Banner";
import Services from "../components/Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <Services />
      <Portfolio />
    </div>
  );
}
