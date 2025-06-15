import styles from '@/styles/page.module.css';

export default function GitHubCollabGuide() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Working on Someone Else&apos;s GitHub Repo and Pushing to Your Own</h1>

      {/* Step 1 */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>🔄 Step 1: Clone the Other Person&apos;s Repo</h2>
        <ul className={styles.list}>
          <li>Go to the GitHub repo page you want to work on.</li>
          <li>Copy the HTTPS URL (e.g., <code>https://github.com/other-user/repo-name.git</code>).</li>
          <li>
            On your local machine, open a terminal and run:
            <pre className={styles.codeBlock}>
              <code>git clone https://github.com/other-user/repo-name.git</code>
            </pre>
          </li>
          <li>
            Change directory into the repo:
            <pre className={styles.codeBlock}>
              <code>cd repo-name</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Step 2 */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>✏️ Step 2: Create a New Branch &amp; Make Your Changes</h2>
        <ul className={styles.list}>
          <li>
            Create a new branch (replace <code>feature-branch</code> with your branch name):
            <pre className={styles.codeBlock}>
              <code>git checkout -b feature-branch</code>
            </pre>
          </li>
          <li>
            Edit files locally with your preferred editor (e.g., <code>code .</code> for VS Code).
          </li>
          <li>
            Stage and commit your changes:
            <pre className={styles.codeBlock}>
              <code>{`git add .\ngit commit -m "Describe your changes"`}</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Step 3 */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>📤 Step 3: Push Changes to the Original Repo (If You Have Access)</h2>
        <ul className={styles.list}>
          <li>
            Push your branch to the original repo:
            <pre className={styles.codeBlock}>
              <code>git push origin feature-branch</code>
            </pre>
          </li>
          <li>Go to the original GitHub repo page and create a Pull Request from your branch.</li>
          <li>Wait for review and merging by the repo maintainers.</li>
          <li>
            <em>
              If you don&apos;t have write access to the original repo, skip this step and use the
              fork method below.
            </em>
          </li>
        </ul>
      </section>

      {/* Step 4 */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>🍴 Step 4: Fork the Repo to Your Own GitHub Account (If You Don&apos;t Have Access)</h2>
        <ul className={styles.list}>
          <li>On GitHub, open the original repo page.</li>
          <li>Click the <strong>Fork</strong> button in the top-right to create a copy under your account.</li>
          <li>
            Copy the URL of your forked repo (e.g.,{' '}
            <code>https://github.com/your-username/repo-name.git</code>).
          </li>
        </ul>
      </section>

      {/* Step 5 */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>🔄 Step 5: Add Your Fork as a New Remote and Push Changes</h2>
        <ul className={styles.list}>
          <li>
            Add your fork as a remote (named <code>myfork</code> for example):
            <pre className={styles.codeBlock}>
              <code>git remote add myfork https://github.com/your-username/repo-name.git</code>
            </pre>
          </li>
          <li>
            Push your changes to your fork:
            <pre className={styles.codeBlock}>
              <code>git push myfork feature-branch</code>
            </pre>
          </li>
          <li>
            Go to your fork on GitHub and create a Pull Request from <code>feature-branch</code>.
          </li>
          <li>
            You can also keep this fork updated with the original repo by adding it as a remote named{' '}
            <code>upstream</code> (optional):
            <pre className={styles.codeBlock}>
              <code>git remote add upstream https://github.com/other-user/repo-name.git</code>
            </pre>
          </li>
          <li>
            Then, periodically update your fork by fetching from upstream:
            <pre className={styles.codeBlock}>
              <code>{`git fetch upstream\ngit checkout main\ngit merge upstream/main\ngit push myfork main`}</code>
            </pre>
          </li>
        </ul>
      </section>

      {/* Additional Tips */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>💡 Tips &amp; Notes</h2>
        <ul className={styles.list}>
          <li>
            If you want to work on multiple repos or branches, manage remotes carefully with{' '}
            <code>git remote -v</code>.
          </li>
          <li>
            Always pull latest changes before starting work: <code>git pull origin main</code> or{' '}
            <code>git pull upstream main</code>.
          </li>
          <li>Use meaningful branch names and commit messages for clarity.</li>
          <li>
            Use GitHub Desktop or GitHub CLI for GUI or terminal helpers if preferred.
          </li>
        </ul>
      </section>
    </div>
  );
}
