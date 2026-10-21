import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import styles from './Insights.module.css';
import blogsData from '@/data/blogs.json';

export default function Insights() {
  return (
    <section id="insights" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.square}></span> Insights
          </div>
          
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Latest insights.</h2>
            <a href="mailto:hello@sociup.in?subject=Inquiry:%20Insights%20and%20Articles&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI%20was%20reading%20your%20insights%20and..." className={styles.viewAllBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              View All Articles <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {blogsData.map((article, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={article.image || "/1.jpg"} 
                  alt={article.title} 
                  fill 
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.category}>{article.category}</p>
                <h3 className={styles.articleTitle}>{article.title}</h3>
                <div className={styles.arrowCircle}>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
