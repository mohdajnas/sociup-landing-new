import Image from 'next/image';
import styles from './LogoTicker.module.css';

const logos = [
  { src: '/brand-logo/1.png', alt: 'Brand 1' },
  { src: '/brand-logo/2.png', alt: 'Brand 2' },
  { src: '/brand-logo/3.png', alt: 'Brand 3' },
  { src: '/brand-logo/4.png', alt: 'Brand 4' },
  { src: '/brand-logo/5.png', alt: 'Brand 5' },
];

export default function LogoTicker() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.icon}>✹</div>
          <p className={styles.text}>
            WE&apos;VE DONE 500+ ENTERPRISE AND<br />
            BUSINESS CONSULTING.
          </p>
        </div>
        
        <div className={styles.right}>
          <div className={styles.marqueeContent}>
            {/* Set 1 */}
            {logos.map((logo, index) => (
              <div key={`set1-${index}`} className={styles.logo}>
                <Image src={logo.src} alt={logo.alt} width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
            ))}
            {/* Set 2 (Duplicated for seamless loop) */}
            {logos.map((logo, index) => (
              <div key={`set2-${index}`} className={styles.logo}>
                <Image src={logo.src} alt={logo.alt} width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
