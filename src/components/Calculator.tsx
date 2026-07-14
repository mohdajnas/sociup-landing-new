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
              
              <button className={styles.submitBtn}>
                Request Formal Quote <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
