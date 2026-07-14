import Link from 'next/link';
import { ArrowLeft, Briefcase } from 'lucide-react';
import styles from './page.module.css';
import careersData from '@/data/careers.json';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Careers() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Home
          </Link>
          <h1 className={styles.title}>Join Our Team</h1>
          <p className={styles.subtitle}>Help us build the next generation of digital experiences.</p>
          <p className={styles.adminNote}>Admin: To edit these jobs, modify src/data/careers.json</p>
        </div>

        <div className={styles.jobList}>
          {careersData.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <div>
                  <h2 className={styles.jobTitle}>{job.title}</h2>
                  <div className={styles.tags}>
                    <span className={styles.tag}>{job.department}</span>
                    <span className={styles.tag}>{job.type}</span>
                    <span className={styles.tag}>{job.location}</span>
                  </div>
                </div>
                <a href={`mailto:hello@sociup.in?subject=${encodeURIComponent(`Application for ${job.title}`)}&body=${encodeURIComponent(`Hi SOCIUP team,\n\nI am writing to apply for the ${job.title} position. Please find my portfolio link and resume attached.\n\nBest regards,`)}`} className={styles.applyBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Apply Now</a>
              </div>
              <p className={styles.jobDescription}>{job.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
