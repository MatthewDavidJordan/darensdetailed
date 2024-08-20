import styles from "./page.module.css";

import Banner from "./Banner";
import Services from "./Services";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <Banner />
        <Services />
        <Portfolio />
      </div>
    </div>
  );
}
