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
            End-to-End<br />
            Business Creation.<br />
            From Idea<br />
            to Operations.
          </h1>
          
          <div className={styles.bottomRow}>
            <div className={styles.tags}>
              <span className={styles.tag}>+ Discover</span>
              <span className={styles.tag}>+ Build</span>
              <span className={styles.tag}>+ Operate</span>
            </div>
            
            <div className={styles.ctaSection}>
              <p className={styles.description}>
                Turning investment capital into professionally planned, built, branded, and managed businesses.
              </p>
              
              <div className={styles.actions}>
                <a href="#packages" className={styles.btnPrimary} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  View Packages <ArrowUpRight size={18} />
                </a>
                <a href="mailto:hello@sociup.in?subject=Inquiry:%20Business%20Creation%20Partnership&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20business%20creation%20project%20with%20you.%20Please%20let%20me%20know%20the%20best%20time%20to%20connect.%0D%0A%0D%0AThanks!" className={styles.btnSecondary} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  Reach Out <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
