import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero}>
          {/* Left Column */}
          <div className={styles.heroContent}>
            <h1 className={styles.headline}>
              your phone is
              <br />
              keeping you
              <br />
              <span className={styles.accent}>from His presence</span>
            </h1>
            <p className={styles.subtitle}>
              lock your phone until you{" "}
              <span className={styles.subtitleAccent}>worship</span>
            </p>
            <div className={styles.badges}>
              <a href="#" className={styles.badge} aria-label="Download on the App Store">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  width={250}
                  height={83}
                  className={styles.badgeImg}
                  unoptimized
                />
              </a>
              <a href="#" className={styles.badge} aria-label="Get it on Google Play">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  width={250}
                  height={83}
                  className={styles.badgeImg}
                  unoptimized
                />
              </a>
            </div>
          </div>

          {/* Right Column — App Card with Phone Mockup */}
          <div className={styles.heroImage}>
            <div className={styles.appCard}>
              <div className={styles.phone}>
                <div className={styles.screen}>
                  <div className={styles.screenIcon}>🙏</div>
                  <span className={styles.screenLabel}>praise lock</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <ul className={styles.footerLinks}>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Manage Subscription</a></li>
        </ul>
        <p className={styles.footerCopy}>© 2026 Praise Lock. All rights reserved.</p>
      </footer>
    </>
  );
}
