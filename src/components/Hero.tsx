import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './Hero.module.css';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.background}>
        <Image 
          src="/hero_bg_1784005619567.png" 
          alt="Designer working" 
          fill 
          className={styles.bgImage}
          priority
        />
        <div className={styles.overlay}></div>
      </div>
      
      <Navbar />

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Next-Gen<br />
            Design Agency for<br />
            Growing Brands.
          </h1>
          
          <div className={styles.bottomRow}>
            <div className={styles.tags}>
              <span className={styles.tag}>+ Define</span>
              <span className={styles.tag}>+ Design</span>
              <span className={styles.tag}>+ Development</span>
            </div>
            
            <div className={styles.ctaSection}>
              <p className={styles.description}>
                Branding<br />
                Mobile & Web App Design<br />
                for Startups and Giants
              </p>
              
              <div className={styles.actions}>
                <button className={styles.btnPrimary}>
                  View Projects <ArrowUpRight size={18} />
                </button>
                <button className={styles.btnSecondary}>
                  Reach Out <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
