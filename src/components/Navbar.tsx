'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/sociup-white.png" alt="SOCIUP Logo" width={100} height={32} style={{ objectFit: 'contain' }} />
        </div>
        
        <div className={styles.links}>
          <a href="/#home" className={styles.link}>Home</a>
          <a href="/#costing" className={styles.link}>Studio</a>
          <a href="/#who-are-we" className={styles.linkActive}>Work</a>
          <a href="/careers" className={styles.link}>Careers</a>
          <a href="/#insights" className={styles.link}>Blog</a>
          <a href="/#contact" className={styles.link}>Contact</a>
        </div>
        
        <div className={styles.actions}>
          <a href="mailto:hello@sociup.in?subject=Booking%20an%20Intro%20Call&body=Hi%20SOCIUP%20team,%0D%0A%0D%0AI'd%20like%20to%20book%20an%20introductory%20call%20to%20explore%20how%20we%20can%20work%20together.%20My%20availability%20is...%0D%0A%0D%0AThanks!" className={styles.bookBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <div className={styles.avatarWrapper}>
              <Image 
                src="/portrait_2_1784005640839.png" 
                alt="Avatar" 
                width={24} 
                height={24} 
                className={styles.avatar} 
              />
            </div>
            <span className={styles.btnText}>Book A Intro</span>
            <ArrowUpRight size={18} />
          </a>
          
          <button className={styles.mobileMenuToggle} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={styles.mobileDropdown}>
          <a href="/#home" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/#costing" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Studio</a>
          <a href="/#who-are-we" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="/careers" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Careers</a>
          <a href="/#insights" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Blog</a>
          <a href="/#contact" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
