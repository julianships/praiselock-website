import Link from "next/link";
import styles from "./page.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/praise-lock-stop-focus-pray/id6759266143";
const CAMPAIGN_ID = "seo_christian_app_blocker";

export const metadata = {
  title: "Christian app blocker for prayer before scrolling | Praise Lock",
  description:
    "Praise Lock pauses selected apps, guides a short prayer check-in, then unlocks them so Christians can put prayer before scrolling.",
  alternates: {
    canonical: "https://www.praiselock.com/christian-app-blocker",
  },
};

const steps = [
  {
    number: "01",
    title: "Choose the apps that pull your attention",
    body: "Select the apps you want Praise Lock to pause. You stay in control of which distractions are included.",
  },
  {
    number: "02",
    title: "Meet a prayer-first interruption",
    body: "When you reach for a selected app, Praise Lock interrupts the automatic scroll and opens a short check-in instead.",
  },
  {
    number: "03",
    title: "Pause and pray",
    body: "Share how you are feeling and move through a Bible-rooted prayer before continuing.",
  },
  {
    number: "04",
    title: "Unlock and continue intentionally",
    body: "Complete the prayer flow, choose the unlock window, and return to your phone with the interruption finished.",
  },
];

export default function ChristianAppBlockerPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <Link href="/" className={styles.brand}>praise lock</Link>
        <a
          href={APP_STORE_URL}
          className={styles.navCta}
          data-campaign-id={CAMPAIGN_ID}
        >
          Get Praise Lock for iPhone
        </a>
      </nav>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>A Christian app blocker built around prayer</p>
        <h1>Put prayer between the impulse and the scroll.</h1>
        <p className={styles.lead}>
          Praise Lock pauses the apps you choose, guides a short prayer check-in,
          and unlocks them when the prayer flow is complete.
        </p>
        <div className={styles.actions}>
          <a
            href={APP_STORE_URL}
            className={styles.primaryCta}
            data-campaign-id={CAMPAIGN_ID}
          >
            Download on the App Store
          </a>
          <a href="#how-it-works" className={styles.secondaryCta}>
            See how it works
          </a>
        </div>
        <p className={styles.availability}>Currently available for iPhone.</p>
      </section>

      <section className={styles.mechanism} id="how-it-works" aria-labelledby="mechanism-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 id="mechanism-title">One clear boundary, four simple steps.</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.fit} aria-labelledby="fit-title">
        <div>
          <p className={styles.eyebrow}>Not another generic focus timer</p>
          <h2 id="fit-title">Designed for Christians who want a prayer-first phone habit.</h2>
        </div>
        <div className={styles.fitCopy}>
          <p>
            Praise Lock does not ask you to abandon your phone. It creates a
            deliberate interruption before selected apps open, using the moment
            you would normally scroll as a prompt to check in and pray.
          </p>
          <p>
            App blocking, prayer sessions, streaks, and journey insights live in
            one iPhone app. Full access requires a subscription; available plans
            are shown in the app before purchase.
          </p>
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.eyebrow}>Prayer before scrolling</p>
        <h2>Make the next unlock more intentional.</h2>
        <a
          href={APP_STORE_URL}
          className={styles.primaryCta}
          data-campaign-id={CAMPAIGN_ID}
        >
          View Praise Lock on the App Store
        </a>
      </section>

      <footer className={styles.footer}>
        <Link href="/">Home</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/support">Support</Link>
      </footer>
    </main>
  );
}
