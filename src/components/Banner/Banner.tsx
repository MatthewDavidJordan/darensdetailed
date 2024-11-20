"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./banner.module.css";

function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if screen is mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <section className={styles.banner}>
      <Image
        src="/soapy_main_car.jpg"
        alt="Main Banner"
        fill={true}
        quality={100}
        priority={true}
        className={styles.bannerImage}
      />
      <div className={styles.bannerText}>
        <hr />
        <h1>Mobile Auto Detailing</h1>
        <p>
          Experience a more convenient way to maintain your vehicle in showroom
          quality condition
        </p>
        {isMobile ? (
          <a href="tel:2035717860">
            <button>
              <Image
                src="/call.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className={styles.callIcon}
              />
              Call Now
            </button>
          </a>
        ) : (
          <a href="#contact">
            <button>Get in Touch</button>
          </a>
        )}
      </div>
    </section>
  );
}

export default Banner;
