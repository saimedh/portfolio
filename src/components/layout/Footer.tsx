import { Code2, Link2, Mail, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-bg-border bg-bg-surface/50">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            saimedh<span className="text-accent">.</span>dev
          </p>
          <p className="mt-3 max-w-xs text-sm text-ink-muted">
            Building production-ready AI web applications. Currently open to AI
            software engineering internships.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-ink-muted hover:text-ink">Home</a></li>
            <li><a href="/projects" className="text-ink-muted hover:text-ink">Projects</a></li>
            <li><a href="/about" className="text-ink-muted hover:text-ink">About</a></li>
            <li><a href="/process" className="text-ink-muted hover:text-ink">Process & Curation</a></li>
            <li><a href="/contact" className="text-ink-muted hover:text-ink">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="https://github.com/saimedh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink-muted hover:text-ink">
                <Code2 size={16} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sai-medh/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink-muted hover:text-ink">
                <Link2 size={16} aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:saimedhp@gmail.com" className="flex items-center gap-2 text-ink-muted hover:text-ink">
                <Mail size={16} aria-hidden="true" /> saimedhp@gmail.com
              </a>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-ink-muted hover:text-ink">
                <FileText size={16} aria-hidden="true" /> Resume (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bg-border py-6">
        <p className="container-page font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} Saimedh Porandla. Built with React, TypeScript, Tailwind CSS. Status: <span className="text-signal">production-ready</span>.
        </p>
      </div>
    </footer>
  );
}
