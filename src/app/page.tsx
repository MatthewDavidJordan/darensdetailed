import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Main Banner Section */}
        <section className={styles.banner}>
          <Image
            src="/soapy_main_car.jpg"
            alt="Main Banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            className={styles.bannerImage}
          />
          <div className={styles.bannerText}>
            <h1>Mobile Auto Detailing</h1>
            <p>Professional Detailing Services</p>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.serviceCards}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/soapy_sport.jpg"
                  alt="soapy sports car"
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
              </div>
              <h3>Exterior Detailing</h3>
            </div>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/soapy_mid.jpg"
                  alt="soapy midsize SUV"
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
              </div>
              <h3>Interior Detailing</h3>
            </div>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/soapy_full.jpg"
                  alt="soapy full size SUV"
                  layout="fill"
                  objectFit="cover"
                  className={styles.cardImage}
                />
              </div>
              <h3>Full Package</h3>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
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
      </div>
    </div>
  );
}
