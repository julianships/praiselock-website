import Image from "next/image";
import Link from "next/link";
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
                  <Image
                    src="/notification-tap.png"
                    alt=""
                    fill
                    priority
                    sizes="(max-width: 768px) 190px, (max-width: 1100px) 200px, 240px"
                    className={styles.screenShot}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <ul className={styles.footerLinks}>
          <li><Link href="/privacy">Terms of Service</Link></li>
          <li><Link href="/privacy">Privacy Policy</Link></li>
          <li><Link href="/support">Contact Us</Link></li>
          <li><Link href="/support">Manage Subscription</Link></li>
        </ul>
        <p className={styles.footerCopy}>© 2026 Praise Lock. All rights reserved.</p>
      </footer>
    </>
  );
}
