import styles from './LogoTicker.module.css';

export default function LogoTicker() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.claimStrip}>
          <span className={styles.icon}>✹</span>
          <p className={styles.text}>
            ONE ACCOUNTABLE PARTNER FROM IDEA TO OPERATIONS.
          </p>
        </div>
      </div>
    </section>
  );
}
