'use client';

import { useState } from 'react';
import { Calculator as CalcIcon, ChevronRight } from 'lucide-react';
import styles from './Calculator.module.css';

export default function Calculator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('1-3 months');

  const services = [
    { id: 'branding', label: 'Branding', basePrice: 5000 },
    { id: 'social', label: 'Social Media', basePrice: 3000 },
    { id: 'ai', label: 'AI Consultancy', basePrice: 7000 },
    { id: 'domain', label: 'Domain Reserve', basePrice: 500 },
    { id: 'automation', label: 'Automation', basePrice: 6000 },
    { id: 'video', label: 'Video Production', basePrice: 10000 },
  ];

  const timelines = ['< 1 month', '1-3 months', '3-6 months', '6+ months'];

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    const base = selectedServices.reduce((total, id) => {
      const service = services.find(s => s.id === id);
      return total + (service?.basePrice || 0);
    }, 0);
    
    // Add a multiplier based on timeline for visual effect
    let multiplier = 1;
    if (timeline === '< 1 month') multiplier = 1.5; // Rush fee
    if (timeline === '6+ months') multiplier = 0.9; // Discount for flexibility

    return Math.round(base * multiplier);
  };

  return (
    <section id="costing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Estimate your next big project.</h2>
          <p className={styles.description}>Select the services you need and your ideal timeline to get a rough estimate before we talk.</p>
        </div>

        <div className={styles.calculatorBox}>
          <div className={styles.leftCol}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>1. What do you need?</label>
              <div className={styles.optionsGrid}>
                {services.map(service => (
                  <button 
                    key={service.id}
                    className={`${styles.optionBtn} ${selectedServices.includes(service.id) ? styles.active : ''}`}
                    onClick={() => toggleService(service.id)}
                  >
                    {service.label}
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
              <p className={styles.resultLabel}>Estimated Investment</p>
              <h3 className={styles.resultValue}>
                {selectedServices.length > 0 ? `$${calculateEstimate().toLocaleString()}+` : '$0'}
              </h3>
              <p className={styles.resultNote}>*This is a rough estimate. Final pricing depends on project scope.</p>
              
              <a href={`mailto:hello@sociup.in?subject=Request%20for%20Formal%20Quote&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI%20used%20your%20project%20estimator%20and%20would%20like%20to%20request%20a%20formal%20quote.%0D%0A%0D%0ASelected%20Services:%20${encodeURIComponent(selectedServices.map(s => services.find(serv => serv.id === s)?.label).join(', '))}%0D%0ATimeline:%20${encodeURIComponent(timeline)}%0D%0AEstimated%20Investment:%20$${calculateEstimate().toLocaleString()}%2B%0D%0A%0D%0APlease%20let%20me%20know%20the%20next%20steps.%0D%0A%0D%0AThanks!`} className={styles.submitBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Request Formal Quote <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
