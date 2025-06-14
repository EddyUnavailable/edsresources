import styles from '@/styles/page.module.css';

export default function GitHubCommands() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🧰 GitHub Commands Cheat Sheet</h1>

      {/* Git Basics */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>📁 Repo Setup</h2>
        <pre className={styles.codeBlock}>
          <code>
            git init                      # Initialize a local Git repo{''}
            git clone &lt;url&gt;               # Clone a remote repo{''}
            git remote -v                # View current remotes{''}
            git remote add origin &lt;url&gt;  # Add remote origin
          </code>
        </pre>
      </section>

      {/* Staging & Committing */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>📝 Staging & Committing</h2>
        <pre className={styles.codeBlock}>
          <code>
            git status                  # Show file changes{''}
            git add .                   # Stage all files{''}
            git add &lt;file&gt;              # Stage specific file{''}
            git commit -m "message"     # Commit with message
          </code>
        </pre>
      </section>

      {/* Branching */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>🌿 Branching</h2>
        <pre className={styles.codeBlock}>
          <code>
            git branch                  # List branches{''}
            git checkout -b &lt;name&gt;      # Create and switch to new branch{''}
            git checkout &lt;name&gt;         # Switch branch{''}
            git merge &lt;name&gt;            # Merge branch into current
          </code>
        </pre>
      </section>

      {/* Pushing & Pulling */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>☁️ Push & Pull</h2>
        <pre className={styles.codeBlock}>
          <code>
            git pull origin main        # Pull latest changes{''}
            git push origin main        # Push changes to main{''}
            git push -u origin &lt;branch&gt; # Push new branch and set upstream
          </code>
        </pre>
      </section>

      {/* Remotes */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>🔗 Remote Management</h2>
        <pre className={styles.codeBlock}>
          <code>
            git remote add upstream &lt;url&gt;          # Add original repo as upstream{''}
            git fetch upstream                     # Fetch upstream changes{''}
            git merge upstream/main                # Merge upstream into current
          </code>
        </pre>
      </section>

      {/* Collaboration */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>👥 Collaboration</h2>
        <pre className={styles.codeBlock}>
          <code>
            git pull origin main --allow-unrelated-histories  # Merge two unrelated histories{''}
            git stash save "note"        # Temporarily store changes{''}
            git stash pop                # Reapply stashed changes
          </code>
        </pre>
      </section>

      {/* Undo */}
      <section className={styles.section}>
        <h2 className={styles.stepTitle}>⏪ Undo & Fix</h2>
        <pre className={styles.codeBlock}>
          <code>
            git reset --soft HEAD~1     # Undo last commit, keep changes staged{''}
            git reset --hard HEAD~1     # Undo last commit and discard changes{''}
            git restore &lt;file&gt;           # Discard changes in file
          </code>
        </pre>
      </section>
    </div>
  );
}
