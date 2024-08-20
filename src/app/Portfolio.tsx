import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

function portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>Our Work</h2>
      <div className={styles.portfolioGrid}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/portfolio1.jpg"
              alt="Portfolio 1"
              layout="fill"
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/portfolio2.jpg"
              alt="Portfolio 2"
              layout="fill"
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/portfolio3.jpg"
              alt="Portfolio 3"
              layout="fill"
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/portfolio4.jpg"
              alt="Portfolio 4"
              layout="fill"
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default portfolio;
