import styles from './LogoTicker.module.css';

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
            <div className={styles.logo}>
              <span style={{fontWeight: 900, fontSize: '20px', letterSpacing: '-1px'}}>RedBull</span>
            </div>
            <div className={styles.logo}>
              <span style={{fontWeight: 900, fontSize: '24px', letterSpacing: '-2px'}}>JD</span>
            </div>
            <div className={styles.logo}>
              <span style={{fontWeight: 700, fontSize: '18px', letterSpacing: '1px'}}>XBOX</span>
            </div>
            <div className={styles.logo}>
              <span style={{fontWeight: 800, fontSize: '20px', color: '#ff7a59'}}>HubSpot</span>
            </div>
            {/* Set 2 (Duplicated for seamless loop) */}
            <div className={styles.logo}>
              <span style={{fontWeight: 900, fontSize: '20px', letterSpacing: '-1px'}}>RedBull</span>
            </div>
            <div className={styles.logo}>
              <span style={{fontWeight: 900, fontSize: '24px', letterSpacing: '-2px'}}>JD</span>
            </div>
            <div className={styles.logo}>
              <span style={{fontWeight: 700, fontSize: '18px', letterSpacing: '1px'}}>XBOX</span>
            </div>
            <div className={styles.logo}>
              <span style={{fontWeight: 800, fontSize: '20px', color: '#ff7a59'}}>HubSpot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
