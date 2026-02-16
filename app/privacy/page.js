import Link from "next/link";
import styles from "../inner.module.css";

export const metadata = {
    title: "privacy policy & terms of service — praise lock",
    description: "Privacy Policy and Terms of Service for Praise Lock.",
};

export default function PrivacyPage() {
    return (
        <>
            <main className={styles.pageWrapper}>
                <Link href="/" className={styles.backLink}>
                    ← back to home
                </Link>

                <h1 className={styles.pageTitle}>privacy policy & terms of service</h1>
                <p className={styles.lastUpdated}>last updated: february 16, 2026</p>

                <div className={styles.sectionBody}>
                    <p>
                        welcome to praise lock. by accessing or using our application (the "app"),
                        you confirm that you have read, understood, and accepted these terms and
                        agree to be legally bound by them. if you do not agree, you must not use our
                        app or services.
                    </p>
                </div>

                {/* ── Terms of Service ────────────────────────── */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>terms of service</h2>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>1. use of our services</h3>
                    <div className={styles.sectionBody}>
                        <ul>
                            <li>
                                <strong>personal use only:</strong> our services are intended for your
                                personal, non-commercial use only. you are prohibited from reselling,
                                copying, or otherwise using our services for commercial purposes.
                            </li>
                            <li>
                                <strong>software protection:</strong> you may not reverse-engineer,
                                decompile, disassemble, or attempt to discover the source code or
                                underlying algorithms of our app.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>2. subscription details</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            praise lock operates on a subscription basis with billing occurring on a
                            monthly or yearly cycle. your chosen payment method will be automatically
                            billed via your App Store or Google Play account unless you cancel your
                            subscription. you can manage your subscription and turn off auto-renewal at
                            any time through your device's account settings.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>3. disclaimers and limitation of liability</h3>
                    <div className={styles.sectionBody}>
                        <ul>
                            <li>
                                <strong>services provided "as is":</strong> our services are provided on
                                an "as is" and "as available" basis. to the maximum extent permitted by
                                law, praise lock disclaims all warranties, whether express or implied.
                            </li>
                            <li>
                                <strong>limitation of liability:</strong> under no circumstances shall
                                praise lock be liable for any indirect, incidental, special,
                                consequential, or punitive damages arising out of your use or inability
                                to use our services. our total liability shall not exceed fifty dollars
                                ($50.00).
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>4. indemnification</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            you agree to indemnify and hold harmless praise lock, its affiliates, and
                            employees from any claims, liabilities, damages, and expenses arising out
                            of your use of our services or your breach of these terms.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>5. termination and modification</h3>
                    <div className={styles.sectionBody}>
                        <ul>
                            <li>
                                <strong>termination:</strong> we reserve the right to suspend or
                                terminate your access to our services at any time, without prior notice,
                                if you violate these terms.
                            </li>
                            <li>
                                <strong>modification:</strong> we reserve the right to update these terms
                                at any time. any changes will be posted on our website, and your
                                continued use of our services will constitute your acceptance of the new
                                terms.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ── Privacy Policy ─────────────────────────── */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>privacy policy</h2>
                    <div className={styles.sectionBody}>
                        <p>
                            at praise lock, we are committed to safeguarding your personal information.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>6. information collection</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            we collect information you voluntarily provide when you create an account
                            and use the app. this includes:
                        </p>
                        <ul>
                            <li>
                                <strong>account information:</strong> your email address and username.
                            </li>
                            <li>
                                <strong>usage data:</strong> information about your interactions with the
                                app, such as worship sessions completed and preferences.
                            </li>
                            <li>
                                <strong>device data:</strong> your device's push notification token (if
                                you consent) and advertising identifier if you provide consent through
                                the appropriate tracking transparency prompt.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>7. use of your information</h3>
                    <div className={styles.sectionBody}>
                        <p>we use your information to:</p>
                        <ul>
                            <li>provide, operate, and improve our services.</li>
                            <li>create and manage your account and process subscriptions.</li>
                            <li>send you push notifications.</li>
                            <li>measure the effectiveness of our marketing campaigns.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>8. disclosure of your information</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            we share your information with trusted third-party service providers to
                            perform services on our behalf, including:
                        </p>
                        <ul>
                            <li>
                                <strong>backend & database:</strong> Google Firebase
                            </li>
                            <li>
                                <strong>subscription management:</strong> RevenueCat
                            </li>
                            <li>
                                <strong>analytics:</strong> Mixpanel, Firebase Crashlytics
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>9. data security and retention</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            we implement appropriate technical measures to protect your data. your data
                            is retained for as long as your account is active or as necessary to
                            fulfill the purposes outlined in this policy.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>10. your data rights</h3>
                    <div className={styles.sectionBody}>
                        <p>you have the right to:</p>
                        <ul>
                            <li>access, correct, or update your personal data.</li>
                            <li>
                                request the deletion of your account and associated data from within the
                                app's settings.
                            </li>
                            <li>
                                control your tracking preferences for advertising purposes via your
                                device's settings.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>11. children's privacy</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            we do not knowingly collect information from or market to children under
                            the age of 13.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3 className={styles.sectionTitle}>12. contact us</h3>
                    <div className={styles.sectionBody}>
                        <p>
                            if you have questions about these terms or our privacy policy, please
                            contact us at:{" "}
                            <a href="mailto:support@praiselock.com">support@praiselock.com</a>
                        </p>
                    </div>
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
