'use client';


import styles from '@/styles/layout.module.css';
import Link from 'next/link';

export default function layoutGitHub({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <aside className={styles.sidebar}>
        <nav className={styles.navBar}>
          <Link className={styles.navButton} href="/gitHub">🏠</Link>
          <Link className={styles.navButton} href="/gitHub/gitHubClone">🗣️</Link>
          <Link className={styles.navButton} href="/gitHub/gitHubCheatSheet">🖼️</Link>
          <Link className={styles.navButton} href="/gitHub">🤖</Link>
          <Link className={styles.navButton} href="/gitHub">🧩</Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
