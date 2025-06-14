import styles from '@/styles/blenderAssets.module.css';

const assets = [
  {
    name: 'Poly Haven',
    url: 'https://polyhaven.com',
    description: 'Free, high-quality models, textures, and HDRIs — all CC0 licensed.'
  },
  {
    name: 'AmbientCG',
    url: 'https://ambientcg.com',
    description: 'Huge library of seamless PBR textures — completely free and CC0.'
  },
  {
    name: 'Sketchfab (Free Models)',
    url: 'https://sketchfab.com/search?features=downloadable&licenses=cc0',
    description: 'Free downloadable 3D models. Filter by license for commercial use.'
  },
  {
    name: 'CGBookcase',
    url: 'https://cgbookcase.com',
    description: 'Free textures for any use. Organized and beginner-friendly.'
  },
  {
    name: 'BlenderKit',
    url: 'https://www.blenderkit.com',
    description: 'Online library of free Blender assets built into Blender itself.'
  },
  {
    name: 'CGTrader (Free)',
    url: 'https://www.cgtrader.com/free-3d-models',
    description: '3D asset marketplace with a free section.'
  },
  {
    name: 'OpenGameArt',
    url: 'https://opengameart.org',
    description: 'Free 2D and 3D assets for game development, many CC0 licensed.'
  },
  {
    name: 'TurboSquid (Free Section)',
    url: 'https://www.turbosquid.com/free-3d-model-downloads',
    description: 'High-quality free 3D models, check license for usage.'
  },
  {
    name: 'Free3D',
    url: 'https://free3d.com',
    description: 'Variety of free 3D models compatible with Blender.'
  },
  {
    name: 'HDRI Haven',
    url: 'https://hdrihaven.com',
    description: 'Free CC0 HDRIs for realistic lighting in Blender.'
  },
  {
    name: 'Textures.com',
    url: 'https://textures.com',
    description: 'Free textures with limited daily downloads, great for PBR materials.'
  },
  {
    name: '3DTextures.me',
    url: 'https://3dtextures.me',
    description: 'Free CC0 PBR textures optimized for 3D rendering.'
  },
  {
    name: 'NASA 3D Resources',
    url: 'https://nasa3d.arc.nasa.gov/models',
    description: 'Free space-themed 3D models for non-commercial use.'
  },
  {
    name: 'BlendSwap',
    url: 'https://blendswap.com',
    description: 'Community-driven free .blend files, including models and materials.'
  }
];

export default function BlenderAssets() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Free Assets for Blender</h1>
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Name</div>
          <div className={styles.cell}>Website</div>
          <div className={styles.cell}>Description</div>
        </div>
        {assets.map((asset, index) => (
          <div className={styles.row} key={index}>
            <div className={styles.cell}>{asset.name}</div>
            <div className={styles.cell}>
              <a href={asset.url} className={styles.link} target="_blank" rel="noopener noreferrer">
                {asset.url.replace('https://', '')}
              </a>
            </div>
            <div className={styles.cell}>{asset.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}