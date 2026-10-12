import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: {
    default: "Fieldnotes | A journal about the web",
    template: "%s | Fieldnotes",
  },
  description: "Notes on building for the web, learning in public, and the small details that make the digital world feel human.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container header-inner">
            <Link href="/" className="logo">
              <span className="logo-mark" aria-hidden="true">F.</span>
              <span className="logo-name">Fieldnotes<span className="logo-period">.</span><small>WEB, WORK & WONDER</small></span>
            </Link>
            <nav aria-label="Main navigation">
              <Link href="/">Journal</Link>
              <Link href="/about/">About</Link>
            </nav>
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="footer">
          <div className="container footer-inner">
            <p><span className="logo-period">F.</span> Fieldnotes, a personal journal.</p>
            <p>Made slowly, on the internet. <span>© {new Date().getFullYear()}</span></p>
          </div>
        </footer>
      </body>
    </html>
  );
}