import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.cta}>
            <h2 className={styles.ctaText}>Let's build<br />something great.</h2>
            <a href="mailto:hello@sociup.in?subject=Let's%20build%20something%20great&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20regarding...%0D%0A%0D%0AThanks!" className={styles.talkBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              Get in touch <ArrowUpRight size={20} />
            </a>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.colTitle}>Studio</h4>
              <a href="#" className={styles.link}>Work</a>
              <a href="#" className={styles.link}>About</a>
              <a href="#" className={styles.link}>Services</a>
              <a href="#" className={styles.link}>Careers</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.colTitle}>Socials</h4>
              <a href="#" className={styles.link}>Twitter</a>
              <a href="#" className={styles.link}>LinkedIn</a>
              <a href="https://www.instagram.com/sociup.in" className={styles.link} target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" className={styles.link}>Dribbble</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.colTitle}>Contact</h4>
              <a href="mailto:hello@sociup.in" className={styles.link}>hello@sociup.in</a>
              <a href="tel:+919745322113" className={styles.link}>+91 9745322113</a>
            </div>
          </div>
        </div>
        
        <div className={styles.massiveTextWrapper}>
          <h1 className={styles.massiveText}>SOCIUP</h1>
        </div>
        
        <div className={styles.bottomSection}>
          <div className={styles.logo}>
            <Image src="/sociup-white.png" alt="SOCIUP Logo" width={100} height={32} style={{ objectFit: 'contain' }} />
          </div>
          <p className={styles.copyright}>© {new Date().getFullYear()} SOCIUP Agency. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
