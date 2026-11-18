import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Instagram, Linkedin, TreePine } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const navLogo = `${BASE}/colorstack-logo.webp`;
const logo = `${BASE}/logo-bg.webp`;

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://www.instagram.com/colorstackutd/", label: "Instagram", handle: "@colorstackutd" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/colorstack-utd/", label: "LinkedIn", handle: "ColorStack UTD" },
  { Icon: TreePine, href: "https://linktr.ee/ColorStackUTD", label: "Linktree", handle: "All Links" },
];

const HEADER_ICON_LINK_CLASS =
  "p-1.5 text-[#114634] hover:text-[#EC7524] transition-colors duration-150";

function HeaderIconLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      {SOCIAL_LINKS.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          onClick={onNavigate}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={HEADER_ICON_LINK_CLASS}
        >
          <Icon size={18} strokeWidth={1.8} />
        </a>
      ))}
    </>
  );
}

const QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "The harder I work, the luckier I get.", author: "Samuel Goldwyn" },
  { text: "The process is the process. Don't think about winning a championship - think about what you need to do right now.", author: "Nick Saban" },
];

function RotatingQuote() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timeout: ReturnType<typeof setTimeout>;
    const interval = setInterval(() => {
      setVisible(false);
      timeout = setTimeout(() => {
        setIdx(i => (i + 1) % QUOTES.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const quote = QUOTES[idx];
  return (
    <div
      className="chapter-footer-quote max-w-sm text-sm leading-relaxed transition-opacity duration-400"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <p className="text-white/60 italic">"{quote.text}"</p>
      <p className="text-white/65 mt-1.5">- {quote.author}</p>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const programsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
      if (programsDropdownRef.current && !programsDropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setAboutOpen(false);
      setProgramsOpen(false);
      setMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setAboutOpen(false);
    setProgramsOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location === path;

  const linkClass = (path: string) =>
    `text-[15px] font-medium transition-colors duration-150 ${
      isActive(path) ? "text-primary" : "text-foreground/80 hover:text-primary"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <a className="chapter-skip" href="#main-content">Skip to content</a>
      {/* Navbar */}
      <nav className="chapter-nav" aria-label="Main navigation">
        <div className="chapter-shell chapter-nav-inner">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center" data-testid="link-home">
            <img src={navLogo} alt="ColorStack UTD" width={44} height={44} className="h-11 w-11 object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="chapter-nav-desktop">
            <Link href="/events" className={linkClass("/events")} data-testid="link-events">
              Events
            </Link>
            <Link href="/sponsors" className={linkClass("/sponsors")} data-testid="link-sponsors">
              Sponsors
            </Link>
            <Link href="/board" className={linkClass("/board")} data-testid="link-meet-the-board">
              Meet Us
            </Link>
            <Link href="/resources" className={linkClass("/resources")} data-testid="link-resources">
              Resources
            </Link>

            {/* Programs dropdown */}
            <div className="relative" ref={programsDropdownRef}>
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-150 ${
                  isActive("/zero-to-launch") || isActive("/codepath-tip") || isActive("/colorstack-mini")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
                aria-expanded={programsOpen} data-testid="dropdown-programs"
              >
                Programs
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${programsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {programsOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-border/60 py-1.5 overflow-hidden">
                  <Link
                    href="/zero-to-launch"
                    onClick={() => setProgramsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors"
                    data-testid="dropdown-link-summer-swe-academy"
                  >
                    Summer SWE Academy
                  </Link>
                  <Link
                    href="/codepath-tip"
                    onClick={() => setProgramsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors"
                    data-testid="dropdown-link-codepath-tip"
                  >
                    CodePath TIP
                  </Link>
                  <Link
                    href="/colorstack-mini"
                    onClick={() => setProgramsOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors"
                    data-testid="dropdown-link-colorstack-mini"
                  >
                    ColorStack Mini
                  </Link>
                </div>
              )}
            </div>

            {/* About Us dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-150 ${
                  isActive("/about") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                aria-expanded={aboutOpen} data-testid="dropdown-about"
              >
                About Us
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                />
              </button>

              {aboutOpen && (
                <div className="absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-border/60 py-1.5 overflow-hidden">
                  <Link
                    href="/about"
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors"
                    data-testid="dropdown-link-about"
                  >
                    About
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 transition-colors"
                    data-testid="dropdown-link-contact"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-1.5">
              <HeaderIconLinks />
            </div>

            <Link href="/join" data-testid="link-join" className="chapter-button chapter-nav-cta">
              Join
            </Link>
          </div>

          <div className="chapter-nav-mobile">
            <HeaderIconLinks />
            <button
              className="text-foreground/70 hover:text-foreground p-2 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen} aria-controls={mobileMenuOpen ? "chapter-mobile-menu" : undefined} data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="chapter-mobile-menu" className="chapter-mobile-menu border-t border-border/40 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {[
                { name: "Events", path: "/events" },
                { name: "Sponsors", path: "/sponsors" },
                { name: "Meet Us", path: "/board" },
                { name: "Resources", path: "/resources" },
                { name: "Summer SWE Academy", path: "/zero-to-launch" },
                { name: "CodePath TIP", path: "/codepath-tip" },
                { name: "ColorStack Mini", path: "/colorstack-mini" },
                { name: "About", path: "/about" },
                { name: "Join", path: "/join" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary/8 text-primary"
                      : "text-foreground/80 hover:bg-muted/60 hover:text-primary"
                  }`}
                  data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main id="main-content" className="flex-1" tabIndex={-1}>
        <div key={location} className="chapter-route" data-home={location === "/" ? "" : undefined}>
          {children}
        </div>
      </main>

      <footer className="chapter-footer bg-[#1a1a1a] text-white mt-auto">
        <div className="chapter-shell grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="ColorStack at UTD" width={40} height={40} loading="lazy" decoding="async" className="h-10 w-auto rounded-lg object-contain" />
            </div>
            <RotatingQuote />
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/65 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Sponsors", path: "/sponsors" },
                { name: "Meet the Board", path: "/board" },
                { name: "Resources", path: "/resources" },
                { name: "Summer SWE Academy", path: "/zero-to-launch" },
                { name: "CodePath TIP", path: "/codepath-tip" },
                { name: "ColorStack Mini", path: "/colorstack-mini" },
                { name: "About Us", path: "/about" },
                { name: "Join", path: "/join" },
              ].map((l) => (
                <li key={l.path}>
                  <Link href={l.path} onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-white text-sm transition-colors" data-testid={`footer-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/65 mb-4">Connect</h4>
            <a
              href="mailto:utdcolorstack@gmail.com"
              className="text-primary hover:text-primary/80 text-sm transition-colors block mb-4"
              data-testid="footer-link-email"
            >
              utdcolorstack@gmail.com
            </a>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ Icon, href, label, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/60 hover:text-white text-sm transition-colors"
                >
                  <Icon size={15} strokeWidth={1.8} className="text-white/65" />
                  {handle}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-white/10 text-center text-white/65 text-xs">
          &copy; {new Date().getFullYear()} ColorStack at UT Dallas. All rights reserved.
        </div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-6 pt-4 border-t border-white/5 text-center">
          <p style={{ fontSize: '12px', color: '#888888', fontStyle: 'italic' }}>
            Designed &amp; Built By Michael Katongole aka &quot;The General&quot; aka Nick Saban
          </p>
        </div>
      </footer>
    </div>
  );
}
