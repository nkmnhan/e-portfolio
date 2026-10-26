import { siteConfig } from "@/lib/data/site-config";

export function Footer() {
  return (
    // Extra bottom padding on mobile clears the fixed NavMobile bar
    <footer className="px-5 pt-8 pb-24 md:pb-10 border-t border-border/50">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row gap-2 md:justify-between text-sm text-text-muted">
        <p>© {new Date().getFullYear()} {siteConfig.name} (Nguyễn Khoa Minh Nhân)</p>
        <a
          href="https://github.com/nkmnhan/e-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center min-h-11 hover:text-primary transition-colors"
        >
          Built with Next.js · Source on GitHub
        </a>
      </div>
    </footer>
  );
}
