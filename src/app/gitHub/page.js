import styles from '@/styles/page.module.css';

export default function GitHub() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Set Up a GitHub Repo and Start a New Next.js App (2025)
      </h1>

      {/* Step 1: Create a New GitHub Repository */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>🛠 Step 1: Create a New GitHub Repository</h2>
        <ul className={styles.list}>
          <li>
            Go to{' '}
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              https://github.com/
            </a>{' '}and sign in.
          </li>
          <li>
            On the GitHub homepage, create a new repository:
            <ul className={styles.sublist}>
              <li>
                In the left sidebar, under <strong>&quot;Top Repositories&quot;</strong>, click the green <strong>New</strong> button.
              </li>
              <li>
                Or click the <strong>+ icon</strong> in the top-right corner next to your profile picture, then select <strong>New repository</strong>.
              </li>
            </ul>
          </li>
          <li>
            Fill out the repository form:
            <ul className={styles.sublist}>
              <li><strong>Repository name</strong>: <code className={styles.codeInline}>my-nextjs-app</code></li>
              <li><strong>Description</strong>: Optional</li>
              <li><strong>Visibility</strong>: Choose Public or Private</li>
              <li>
                <strong>Optional but recommended:</strong> Check <strong>Add a README file</strong> and choose the <strong>Node</strong> .gitignore template.
              </li>
              <li>Optionally, select a license (e.g., MIT).</li>
            </ul>
          </li>
          <li>Click <strong>Create repository</strong>.</li>
          <li>
            Copy your repo URL: <code className={styles.codeInline}>https://github.com/your-username/my-nextjs-app.git</code>
          </li>
        </ul>
      </section>

      {/* Step 2: Set Up a New Next.js App Locally */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>💻 Step 2: Set Up a New Next.js App Locally</h2>
        <ul className={styles.list}>
          <li>
            Make sure Node.js (v18 or later) is installed:
            <pre className={styles.codeBlock}><code>node -v</code></pre>
            Download from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className={styles.link}>nodejs.org</a> if needed.
          </li>
          <li>
            Clone your GitHub repo:
            <pre className={styles.codeBlock}>
              <code>{`git clone https://github.com/your-username/my-nextjs-app.git
cd my-nextjs-app`}</code>
            </pre>
          </li>
          <li>
            Set up the Next.js app in the current folder:
            <pre className={styles.codeBlock}>
              <code>npx create-next-app@latest .</code>
            </pre>
            <ul className={styles.sublist}>
              <li>Use <code className={styles.codeInline}>.</code> to install in the current directory.</li>
              <li>
                Or use full flags to skip prompts:
                <pre className={styles.codeBlock}>
                  <code>
{`npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"`}
                  </code>
                </pre>
              </li>
            </ul>
          </li>
          <li>
            View the app in your browser:
            <pre className={styles.codeBlock}>
              <code>npm run dev</code>
            </pre>
            Visit{' '}
            <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" className={styles.link}>
              http://localhost:3000
            </a>{' '}to see the default Next.js app.
          </li>
          <li>
            Open the project in VS Code:
            <pre className={styles.codeBlock}>
              <code>code .</code>
            </pre>
          </li>
          <li>
            Stage and commit your changes:
            <pre className={styles.codeBlock}>
              <code>{`git add .
git commit -m "Initial commit: Set up Next.js app"`}</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Step 3: Connect Local Repo to GitHub */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>☁️ Step 3: Connect Local Repo to GitHub</h2>

        <h3 className={styles.subheading}>✅ If you DID initialize the GitHub repo with a README</h3>
        <ul className={styles.list}>
          <li>
            You'll need to merge histories:
            <pre className={styles.codeBlock}>
              <code>git pull origin main --allow-unrelated-histories</code>
            </pre>
            <p>Resolve any merge conflicts if needed, then:</p>
            <pre className={styles.codeBlock}>
              <code>{`git add .
git commit -m "Merge GitHub README with local Next.js app"
git push -u origin main`}</code>
            </pre>
          </li>
        </ul>

        <h3 className={styles.subheading}>🚫 If you did NOT include a README on GitHub</h3>
        <ul className={styles.list}>
          <li>
            You can push without any extra steps:
            <pre className={styles.codeBlock}>
              <code>{`git remote add origin https://github.com/your-username/my-nextjs-app.git
git branch -M main
git push -u origin main`}</code>
            </pre>
          </li>
        </ul>

        <p className={styles.note}>💡 <strong>Why this matters:</strong> Git treats the GitHub repo and your local app as two separate histories if both have initial commits. You must merge them or Git won&apos;t allow a direct push.</p>
      </section>
    </div>
  );
}
