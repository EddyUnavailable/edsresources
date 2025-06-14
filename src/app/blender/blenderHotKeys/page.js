// pages/blender-hotkeys.js
import styles from '@/styles/blenderAssets.module.css';

const hotkeys = [
  {
    category: 'General (most window types)',
    keys: [
      ['Toolbar', 'T'], ['Properties', 'N'], ['Add Object/Node', 'Shift + A'], ['Delete', 'X or Delete'], ['Search', 'F3'],
      ['Move', 'G'], ['Scale', 'S'], ['Rotate', 'R'], ['Rotate along axis', 'R then X/Y/Z'], ['Rotate along local axis', 'R then X,X/Y,Y/Z,Z'],
      ['Trackball Rotate', 'R, R'], ['Precise movement', 'Shift (hold)'], ['Incremental movement', 'Ctrl (hold)'],
      ['Duplicate', 'Shift + D'], ['Duplicate Linked', 'Alt + D'], ['Hide', 'H'], ['Unhide All', 'Alt + H'], ['Hide all Except Selected', 'Shift + H']
    ]
  },
  {
    category: 'Navigation (3D viewport)',
    keys: [
      ['Orbit', 'MMB'], ['Pan', 'Shift + MMB'], ['Zoom In/Out', 'Scroll or Ctrl + MMB'], ['Fly', 'Shift + ~']
    ]
  },
  {
    category: 'View (3D viewport)',
    keys: [
      ['Isolate', '/'], ['Top', '7'], ['Up', '8'], ['Opposite', '9'], ['Left', '4'], ['Persp/Ortho', '5'],
      ['Right', '6'], ['Front', '1'], ['Down', '2'], ['Side', '3'], ['Camera', '0'], ['Focus', '.'],
      ['View Pie Menu', '~'], ['Fast View Switch', 'Alt + MMB (drag)'], ['Show All Objects', 'Home'], ['Focus to region', 'Shift + B']
    ]
  },
  {
    category: 'Object Mode',
    keys: [
      ['Mode Pie Menu', 'Ctrl + TAB'], ['Edit/Object mode toggle', 'TAB'], ['Mirror', 'Ctrl + M then X/Y/Z'],
      ['Set Parent', 'Ctrl + P'], ['Clear Parent', 'Alt + P'], ['Toggle Snapping', 'Shift + TAB'],
      ['Clear Location', 'Alt + G'], ['Clear Rotation', 'Alt + R'], ['Clear Scale', 'Alt + S'],
      ['Apply Location / Scale / Rotation', 'Ctrl + A'], ['Join Selected Objects', 'Ctrl + J'], ['Copy Attributes to New Objects', 'Ctrl + L'],
      ['Add Subdivision level', 'Ctrl + 0/1/2/3/4/5'], ['Mask view to region / Clear mask', 'Alt + B'],
      ['Center 3D cursor', 'Shift + C'], ['Move active object to Collection', 'M'], ['Move Active Camera to view', 'Ctrl + Alt + 0'],
      ['Set as Active Camera', 'Ctrl + Numpad 0']
    ]
  },
  {
    category: 'Modeling (Edit Mode)',
    keys: [
      ['Extrude', 'E'], ['Inset', 'I'], ['Bevel', 'Ctrl + B'], ['Bevel Vertices', 'Ctrl + Shift + B'], ['Loop cut', 'Ctrl + R'],
      ['Vertex/Edge Slide', 'G,G'], ['Knife', 'K'], ['Fill Face', 'F'], ['Shear', 'Ctrl + Shift + Alt + S'],
      ['Bend', 'Shift + W'], ['Split', 'Y'], ['Rip', 'V'], ['Rip Fill', 'Alt + V'], ['Merge', 'M'],
      ['Recalculate Normals', 'Shift + N'], ['Flip Normals', 'Ctrl + Shift + N'], ['Proportional Editing On/Off', 'O'],
      ['Proportional Falloff Type', 'Shift + O'], ['Separate selection to new object', 'P']
    ]
  },
  {
    category: 'Sculpting',
    keys: [
      ['Brush Selection', 'Shift + Space'], ['Brush Size', 'F'], ['Brush Strength', 'Shift + F'], ['Brush Angle', 'Ctrl + F'],
      ['Angle Control', 'R'], ['Stroke Control', 'E'], ['Mask (box)', 'B'], ['Mask (brush)', 'M'],
      ['Clear Mask', 'Alt + M'], ['Invert Mask', 'Ctrl + I'], ['Hide (box)', 'H']
    ]
  },
  {
    category: 'Rendering',
    keys: [
      ['Render', 'F12'], ['Render Animation', 'Ctrl + F12'], ['Playback rendered animation', 'Ctrl + F11'],
      ['Set Render Region', 'Ctrl + B'], ['Clear Render Region', 'Ctrl + Alt + B']
    ]
  }
];

export default function BlenderHotkeys() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blender Hotkeys Reference</h1>
      {hotkeys.map((section, index) => (
        <div key={index} className={styles.section}>
          <h2 className={styles.category}>{section.category}</h2>
          <div className={styles.flexGrid}>
            {section.keys.map(([action, key], i) => (
              <div key={i} className={styles.flexItem}>
                <div className={styles.name}>{action}</div>
                <div className={styles.key}>{key}</div>
              </div>
              
            ))}
          </div>
        </div>
      ))}
      <p className={styles.keymapLink}>
  For a full list of Blender shortcuts, see the{' '}
  <a href="https://docs.blender.org/manual/en/latest/interface/keymap/index.html" target="_blank" rel="noopener noreferrer">
    official Blender keymap documentation
  </a>.
</p>
    </div>
  );
}
