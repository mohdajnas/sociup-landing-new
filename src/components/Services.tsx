import Image from 'next/image';
import { Palette, Share2, Brain, Globe, Zap, Video, ArrowUpRight } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.section}>
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
            We craft high-impact digital experiences<br />
            through strategic design, seamless coding,<br />
            and creative thinking.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Palette size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Branding</h3>
            <p className={styles.serviceDesc}>
              We build distinctive, memorable brands that resonate with your audience and stand out in crowded markets.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Share2 size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Social Media Strategies</h3>
            <p className={styles.serviceDesc}>
              Data-driven social campaigns designed to engage your audience and build organic brand loyalty.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Brain size={28} />
            </div>
            <h3 className={styles.serviceTitle}>AI Consultancy</h3>
            <p className={styles.serviceDesc}>
              Strategic integration of AI tools and workflows to multiply your team's efficiency and capabilities.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Globe size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Domain Reservation</h3>
            <p className={styles.serviceDesc}>
              Securing premium digital real estate and managing your domain portfolio with expert guidance.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Zap size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Automation</h3>
            <p className={styles.serviceDesc}>
              Streamlining complex business processes with custom automated workflows to save time and reduce errors.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.iconWrapper}>
              <Video size={28} />
            </div>
            <h3 className={styles.serviceTitle}>Video Production</h3>
            <p className={styles.serviceDesc}>
              High-quality cinematic content and motion graphics that tell your brand's unique story.
            </p>
            <button className={styles.exploreBtn}>Explore <ArrowUpRight size={16} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
