import Image from 'next/image';
import { Search, Building2, Settings, BarChart3, ShieldCheck, Handshake, ArrowUpRight } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.square}></span> Services
          </div>
        </div>
        
        <div className={styles.contentRow}>
          <h2 className={styles.title}>
            Our 
            <span className={styles.imageInline}>
              <Image 
                src="/portrait_4_1784005661048.png" 
                alt="Services graphic" 
                width={80} 
                height={50} 
                className={styles.image}
              />
            </span> 
            Services
          </h2>
          
          <p className={styles.description}>
            We guide investors from opportunity discovery to launch<br />
            through feasibility, execution, and management.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Search size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Feasibility</h3>
            <p className={styles.serviceDesc}>
              Market research, location analysis, business models, and unit economics that support a documented go/no-go investment decision.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Building2 size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Turnkey Business Development</h3>
            <p className={styles.serviceDesc}>
              Design, procurement, hiring, compliance coordination, launch readiness, and handover under one accountable lead.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Settings size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Managed Operations</h3>
            <p className={styles.serviceDesc}>
              Monthly P&L reporting, cost controls, KPI reviews, SOP oversight, and expansion recommendations after launch.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <BarChart3 size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Investor Reporting</h3>
            <p className={styles.serviceDesc}>
              Budget tracking, change-order control, milestone updates, and monthly dashboards that keep investors informed.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <ShieldCheck size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Compliance</h3>
            <p className={styles.serviceDesc}>
              Coordinating incorporation, licences, tax registrations, and contracts with qualified legal, tax, and licensing specialists.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Handshake size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Venture Partnerships</h3>
            <p className={styles.serviceDesc}>
              Selective equity partnerships with defined governance, only after legal and tax review.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
