'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import styles from './Calculator.module.css';

const packages = [
  { id: 'blueprint', label: 'Blueprint', fee: '₹1.5–4 lakh' },
  { id: 'business-design', label: 'Business Design', fee: '₹5–15 lakh' },
  { id: 'turnkey', label: 'Turnkey Development', fee: '₹10–30 lakh+' },
  { id: 'managed-ops', label: 'Managed Operations', fee: '₹1.5–5 lakh per month' },
  { id: 'partnership', label: 'Partnership', fee: 'Custom quote' },
  { id: 'custom-scope', label: 'Custom Scope', fee: 'Custom quote' },
];

const timelines = ['< 1 month', '1-3 months', '3-9 months', '12+ months'];

export default function Calculator() {
  const [selectedPackage, setSelectedPackage] = useState<string>('blueprint');
  const [timeline, setTimeline] = useState<string>('1-3 months');

  const activePackage = packages.find(p => p.id === selectedPackage) || packages[0];

  return (
    <section id="packages" className={styles.section}>
      <div id="costing" className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Estimate your business setup investment.</h2>
          <p className={styles.description}>
            Select the package you need and your ideal timeline to get indicative planning fees before we talk.
          </p>
        </div>

        <div className={styles.calculatorBox}>
          <div className={styles.leftCol}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>1. What do you need?</label>
              <div className={styles.optionsGrid}>
                {packages.map(pkg => (
                  <button 
                    key={pkg.id}
                    type="button"
                    className={`${styles.optionBtn} ${selectedPackage === pkg.id ? styles.active : ''}`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {pkg.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>2. What's your timeline?</label>
              <div className={styles.optionsRow}>
                {timelines.map(t => (
                  <button 
                    key={t}
                    type="button"
                    className={`${styles.optionBtn} ${timeline === t ? styles.active : ''}`}
                    onClick={() => setTimeline(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.resultBox}>
              <p className={styles.resultLabel}>Indicative Fee</p>
              <h3 className={styles.resultValue}>
                {activePackage.fee}
              </h3>
              <p className={styles.resultNote}>*Indicative fee only, excluding GST. Final pricing depends on signed scope.</p>
              
              <a 
                href={`mailto:hello@sociup.in?subject=Request%20for%20Formal%20Quote&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI%20used%20your%20business%20setup%20estimator%20and%20would%20like%20to%20request%20a%20formal%20quote.%0D%0A%0D%0ASelected%20Package:%20${encodeURIComponent(activePackage.label)}%0D%0ATimeline:%20${encodeURIComponent(timeline)}%0D%0AIndicative%20Fee:%20${encodeURIComponent(activePackage.fee)}%0D%0A%0D%0APlease%20let%20me%20know%20the%20next%20steps.%0D%0A%0D%0AThanks!`} 
                className={styles.submitBtn} 
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                Request Formal Quote <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
