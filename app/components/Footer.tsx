import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}>Impulse Health Hub</h3>
            <p className={styles.brandDescription}>Your comprehensive heart health companion</p>
          </div>

          {/* Links Sections */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Health Knowledge</h4>
            <ul className={styles.linksList}>
              <li><Link href="/knowledge">Heart Rate Basics</Link></li>
              <li><Link href="/knowledge">Stress Management</Link></li>
              <li><Link href="/knowledge">Healthy Lifestyle</Link></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Health Tools</h4>
            <ul className={styles.linksList}>
              <li><Link href="/tools/stress-test">Stress Test</Link></li>
              <li><Link href="/tools/heart-rate-calculator">Heart Rate Calculator</Link></li>
              <li><Link href="/tools/breathing-exercise">Breathing Exercise</Link></li>
            </ul>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>About Us</h4>
            <ul className={styles.linksList}>
              <li><Link href="/about">Impulse Team</Link></li>
              
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2025 Impulse Heart Rate Monitor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 