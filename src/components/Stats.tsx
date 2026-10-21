import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    {
      value: "3",
      title: "Business Lines",
      description: "Venture Studio, Turnkey Development, and Managed Operations, supported by optional, selective venture partnerships."
    },
    {
      value: "7",
      title: "Workflow Stages",
      description: "Written investor approvals precede every major commitment or budget change."
    },
    {
      value: "100%",
      title: "Transparent Costs",
      description: "Itemised budgets. Documented vendor selection. No guaranteed returns."
    },
    {
      value: "5",
      title: "Service Packages Offered",
      description: "From opportunity blueprint to turnkey development, managed operations, and venture-building partnerships."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.square}></span> BY THE BLUEPRINT
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
