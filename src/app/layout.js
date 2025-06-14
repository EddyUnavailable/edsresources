'use client';

import './globals.css';
import styles from '@/styles/layout.module.css'; // Adjust path if needed
import Link from 'next/link';




export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={styles.body}>
          
            <header className={styles.header}>
              <nav className={styles.nav}>
               
               
                <Link className={styles.navBut} href="/">Home</Link>
                <Link className={styles.navBut} href="/resources">Resources</Link>
                <Link className={styles.navBut} href="/blender">Blender</Link>
                <Link className={styles.navBut} href="/gitHub">Git Hub</Link>
                
                <Link className={styles.navBut} href="/ssml">SSML Help</Link>
              </nav>
            </header>

            <main className={styles.main}>
              
                {children}
            
            </main>
          
        </body>
      </html>
    
  );
}
