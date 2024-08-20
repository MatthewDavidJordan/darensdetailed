import React from "react";
import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <Image
        src="/soapy_main_car.jpg"
        alt="Main Banner"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
        className={styles.bannerImage}
      />
      <div className={styles.bannerText}>
        <hr />
        <h1>Mobile Auto Detailing</h1>
        <p>We wash everything</p>
        <a href="#services">
          <button> Services </button>
        </a>
      </div>
    </section>
  );
}

export default Banner;
