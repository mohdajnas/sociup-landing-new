import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="who-are-we" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.square}></span> Who we are
          </div>
        </div>
        
        <div className={styles.contentRow}>
          <h2 className={styles.title}>
            We help investors plan, build,<br />
            launch, and manage operating<br />
            <span className={styles.grayText}>businesses in Kerala.</span>
          </h2>
          
          <div className={styles.linkWrapper}>
            <a href="#" className={styles.link}>
              → ABOUT OUR APPROACH
            </a>
          </div>
        </div>
        
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/1.jpg" 
              alt="Work 1" 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/2.jpg" 
              alt="Work 2" 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/3.jpg" 
              alt="Work 3" 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/4.jpg" 
              alt="Work 4" 
              fill 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
