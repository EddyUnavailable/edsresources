// app/free-assets/page.jsx
import styles from '@/styles/blenderAssets.module.css';
import Link from 'next/link';

export default function FreeAssetsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Top 15 Pages for Free Roblox Assets</h1>

      <section className={styles.section}>
        <h2>Official &amp; Community Sources</h2>
        <ul>
          <li><Link href="https://devforum.roblox.com/t/supers-asset-pack/">Super&apos;s Asset Pack</Link></li>
          <li><Link href="https://devforum.roblox.com/t/iceys-low-poly-asset-pack/">Icey&apos;s Low-Poly Asset Pack</Link></li>
          <li><Link href="https://devforum.roblox.com/t/free-texture-sites/">Free Texture Sites</Link></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Asset Marketplaces &amp; Libraries</h2>
        <ul>
          <li><Link href="https://itch.io">Itch.io – Free Roblox-Tagged Assets</Link></li>
          <li><Link href="https://builtbybit.com/resources/categories/roblox.74/">BuiltByBit – Roblox Free Filters</Link></li>
          <li><Link href="https://clearlydevelopment.com">Clearly Development</Link></li>
          <li><Link href="https://bloxylibrary.glitch.me">BloxyLibrary</Link></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Open-Source &amp; Generic Game Asset Sites</h2>
        <ul>
          <li><Link href="https://opengameart.org">OpenGameArt.org</Link></li>
          <li>
            <Link href="https://freepbr.com">FreePBR</Link>,{' '}
            <Link href="https://polyhaven.com">Poly Haven</Link>,{' '}
            <Link href="https://free3d.com">Free3D</Link>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Tutorials &amp; Reviews</h2>
        <ul>
          <li><Link href="https://www.youtube.com/watch?v=3ZIlUO1Trv4">Roblox Free Asset Pack Showcase</Link></li>
          <li><Link href="https://www.youtube.com/watch?v=63Gz6JHra6o">Top 3 Free Asset Packs for Maps</Link></li>
          <li><Link href="https://www.youtube.com/watch?v=aK8w0lHOZno">Free Asset Website Launch</Link></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Plugins &amp; Roblox Toolbox</h2>
        <ul>
          <li><Link href="https://www.reddit.com/r/robloxgamedev/comments/13jwf4d/best_plugins_for_building/">Reddit: Best Studio Plugins</Link></li>
          <li><Link href="https://www.reddit.com/r/robloxgamedev/comments/m1h8ug/are_free_assets_safe/">Reddit: Are Free Assets Safe?</Link></li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>New Tools</h2>
        <ul>
          <li><Link href="https://create.roblox.com">Roblox Mesh Generator (CUBE 3D)</Link></li>
        </ul>
      </section>

      <section className={styles.guide}>
        <h2>📦 How to Install Roblox Assets</h2>
        <ol>
          <li>Download the asset file (usually .rbxm or .rbxmx).</li>
          <li>Open <strong>Roblox Studio</strong> and go to your project.</li>
          <li>Click <strong>View</strong> &gt; <strong>Explorer</strong> and <strong>Toolbox</strong>.</li>
          <li>Drag the downloaded file into the Explorer window, or click <strong>File &gt; Import</strong> if available.</li>
          <li>Inspect the asset for any malicious scripts before using it.</li>
          <li>Use the <strong>Move</strong>, <strong>Scale</strong>, and <strong>Anchor</strong> tools to position it as needed.</li>
        </ol>
      </section>
    </main>
  );
}
