import { socialLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-[rgba(255,255,255,0.08)] py-12">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold text-sm mb-1">Rushikesh D</p>
            <p className="text-text-3 text-xs" suppressHydrationWarning>
              © {new Date().getFullYear()} · Built with Next.js, TypeScript &amp; Tailwind
            </p>
          </div>

          <div className="flex gap-3">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-text-2 hover:text-white transition-colors no-underline"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
