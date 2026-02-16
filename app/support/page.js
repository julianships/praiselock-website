import Link from "next/link";
import styles from "../inner.module.css";

export const metadata = {
    title: "support — praise lock",
    description: "Get help with Praise Lock. Contact our support team or browse frequently asked questions.",
};

export default function SupportPage() {
    return (
        <>
            <main className={styles.pageWrapper}>
                <Link href="/" className={styles.backLink}>
                    ← back to home
                </Link>

                <h1 className={styles.pageTitle}>support center</h1>
                <p className={styles.pageSubtitle}>
                    need help? we're here to support you on your worship journey.
                </p>

                {/* Contact */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>contact us</h2>
                    <div className={styles.sectionBody}>
                        <p>
                            for app issues, feature requests, or general inquiries:
                        </p>
                        <p>
                            <a href="mailto:support@praiselock.com">support@praiselock.com</a>
                        </p>
                    </div>
                </div>

                {/* FAQ */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>frequently asked questions</h2>
                </div>

                <div className={styles.faq}>
                    <div className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>how do I cancel my subscription?</h3>
                        <p className={styles.faqAnswer}>
                            you can manage your subscription through your device settings. on iOS, go to
                            Settings → [Your Name] → Subscriptions → Praise Lock, then select Cancel
                            Subscription. on Android, open the Google Play Store → Menu → Subscriptions.
                        </p>
                    </div>

                    <div className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>how does praise lock work?</h3>
                        <p className={styles.faqAnswer}>
                            praise lock lets you block your social apps. when you try to open one of
                            your blocked apps, it creates a moment of prayer — so you pray first, and
                            then you're able to unblock your apps.
                        </p>
                    </div>

                    <div className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>is praise lock available on both iOS and Android?</h3>
                        <p className={styles.faqAnswer}>
                            yes! praise lock is available on both the App Store and Google Play Store.
                        </p>
                    </div>

                    <div className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>I found a bug. how do I report it?</h3>
                        <p className={styles.faqAnswer}>
                            please email us at{" "}
                            <a href="mailto:support@praiselock.com">support@praiselock.com</a> with
                            details about the issue, including your device model and OS version. we
                            appreciate your help in making praise lock better!
                        </p>
                    </div>

                    <div className={styles.faqItem}>
                        <h3 className={styles.faqQuestion}>how do I delete my account?</h3>
                        <p className={styles.faqAnswer}>
                            you can request account deletion from within the app's settings, or email{" "}
                            <a href="mailto:support@praiselock.com">support@praiselock.com</a>. all your
                            data will be permanently deleted from our servers.
                        </p>
                    </div>
                </div>

                {/* CTA Card */}
                <div className={styles.contactCard}>
                    <h3>still need help?</h3>
                    <p>can't find what you're looking for? our support team is ready to assist you.</p>
                    <a href="mailto:support@praiselock.com" className={styles.contactLink}>
                        contact support
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <ul className={styles.footerLinks}>
                    <li><Link href="/support">Support</Link></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/">Home</Link></li>
                </ul>
                <p className={styles.footerCopy}>© 2026 Praise Lock. All rights reserved.</p>
            </footer>
        </>
    );
}
