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
            We build search-first digital<br />
            systems to help category <span className={styles.grayText}>leaders<br />
            lead their industries.</span>
          </h2>
          
          <div className={styles.linkWrapper}>
            <a href="#" className={styles.link}>
              → ABOUT THE STUDIO
            </a>
          </div>
        </div>
        
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/work1.png" 
              alt="Portrait 1" 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/work2.png" 
              alt="Portrait 2" 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/work3.png" 
              alt="Portrait 3" 
              fill 
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/work4.png" 
              alt="Portrait 4" 
              fill 
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
