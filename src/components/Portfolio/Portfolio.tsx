import React from "react";
import Image from "next/image";
import styles from "./portfolio.module.css";

function portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <p>RECENT JOBS</p>
      <hr />
      <div className={styles.portfolioGrid}>
        <div className={styles.imageWrapper}>
          <Image
            src="/ferrari.jpg"
            alt="Grey Ferrari"
            fill={true}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/defender.jpg"
            alt="Silver Defender"
            fill={true}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/green_car.jpg"
            alt="Green porche"
            fill={true}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/red_car.jpg"
            alt="Red porche"
            fill={true}
            className={styles.cardImage}
          />
        </div>
      </div>
    </section>
  );
}

export default portfolio;
