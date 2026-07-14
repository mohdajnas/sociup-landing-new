import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './Insights.module.css';

export default async function Insights() {
  // Fetch branding/design related blogs from Dev.to API, revalidating every 24 hours
  let articles = [];
  try {
    const res = await fetch('https://dev.to/api/articles?tag=design&per_page=4', { 
      next: { revalidate: 86400 } 
    });
    if (res.ok) {
      articles = await res.json();
    }
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }

  return (
    <section id="insights" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.square}></span> Insights
          </div>
          
          <div className={styles.titleRow}>
            <h2 className={styles.title}>Latest thinking.</h2>
            <a href="mailto:hello@sociup.in?subject=Inquiry:%20Insights%20and%20Articles&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI%20was%20reading%20your%20insights%20and..." className={styles.viewAllBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              View All Articles <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className={styles.grid}>
          {articles.map((article: any, index: number) => (
            <a href={article.url} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={article.cover_image || article.social_image || "/work1.png"} 
                    alt={article.title} 
                    fill 
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.category}>{article.tag_list?.[0] || 'Design'}</p>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.arrowCircle}>
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
