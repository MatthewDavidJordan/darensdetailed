import React from "react";
import Image from "next/image";
import styles from "./services.module.css";

function Services() {
  return (
    <section className={styles.services} id="services">
      <h2>Services</h2>
      <p>FOR ANY SIZED CAR</p>
      <hr />
      <div className={styles.serviceCards}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/soapy_sport.jpg"
              alt="soapy sports car"
              fill={true}
              className={styles.cardImage}
            />
          </div>
          <h3>Sport</h3>
          <h4>Covers: Sport Cars</h4>
        </div>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/soapy_mid.jpg"
              alt="soapy midsize SUV"
              fill={true}
              className={styles.cardImage}
            />
          </div>
          <h3>Mid-Size</h3>
          <h4>Covers: Sedans + Small SUVs</h4>
        </div>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/soapy_full.jpg"
              alt="soapy full size SUV"
              fill={true}
              className={styles.cardImage}
            />
          </div>
          <h3>Full-Size</h3>
          <h4>Covers: Pickups + Full Size SUVs</h4>
        </div>
      </div>
    </section>
  );
}

export default Services;
