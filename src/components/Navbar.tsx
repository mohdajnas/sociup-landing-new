import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/sociup-white.png" alt="SOCIUP Logo" width={100} height={32} style={{ objectFit: 'contain' }} />
        </div>
        
        <div className={styles.links}>
          <a href="/#home" className={styles.link}>Home</a>
          <a href="/#costing" className={styles.link}>Studio</a>
          <a href="/#who-are-we" className={styles.linkActive}>Work</a>
          <a href="/careers" className={styles.link}>Careers</a>
          <a href="/#insights" className={styles.link}>Blog</a>
          <a href="/#contact" className={styles.link}>Contact</a>
        </div>
        
        <button className={styles.bookBtn}>
          <div className={styles.avatarWrapper}>
            <Image 
              src="/portrait_2_1784005640839.png" 
              alt="Avatar" 
              width={24} 
              height={24} 
              className={styles.avatar} 
            />
          </div>
          <span className={styles.btnText}>Book A Intro</span>
          <ArrowUpRight size={18} />
        </button>
      </div>
    </nav>
  );
}
