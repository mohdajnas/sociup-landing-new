import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    {
      value: "1%",
      title: "Expert-Vetted",
      description: "Recognized in the top 1% of freelancers for consistent quality, trust, and expertise."
    },
    {
      value: "30+",
      title: "Clients served",
      description: "From startups to giants - each treated like our only one."
    },
    {
      value: "100%",
      title: "Success Score",
      description: "All 5-star reviews. No compromises. No 'just okay'."
    },
    {
      value: "2+",
      title: "Years of expertise",
      description: "Deep experience in UX, branding, and growth-driven design for real-world products."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.square}></span> BY THE NUMBERS
          </div>
        </div>
        
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <h3 className={styles.value}>{stat.value}</h3>
              <div className={styles.divider}></div>
              <h4 className={styles.title}>{stat.title}</h4>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
