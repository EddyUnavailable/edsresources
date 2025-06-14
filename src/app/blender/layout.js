'use client';


import styles from '@/styles/layout.module.css';
import Link from 'next/link';

export default function layoutBlender({ children }) {
  return (
    <div className={styles.layoutContainer}>
      <aside className={styles.sidebar}>
        <nav className={styles.navBar}>
          <Link className={styles.navButton} href="/blender">🏠</Link>
          <Link className={styles.navButton} href="/blender/blenderAssets">🗣️</Link>
          <Link className={styles.navButton} href="/blender/blenderHotKeys">🖼️</Link>
          <Link className={styles.navButton} href="/blender/robloxAssets">🤖</Link>
          <Link className={styles.navButton} href="/blender/blender">🧩</Link>
        </nav>
      </aside>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
