import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Instagram, Linkedin, TreePine } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import logoMark from "@assets/Untitled_design_1778794831663.png";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const utdIcon = `${BASE}/utd-icon.png`;
const logo = `${BASE}/logo-bg.png`;

const SOCIAL_LINKS = [
  { Icon: Instagram, href: "https://www.instagram.com/colorstackutd/", label: "Instagram", handle: "@colorstackutd" },
  { Icon: Linkedin, href: "https://www.linkedin.com/company/colorstack-utd/", label: "LinkedIn", handle: "ColorStack UTD" },
  { Icon: TreePine, href: "https://linktr.ee/ColorStackUTD", label: "Linktree", handle: "All Links" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = (path: string) => location === path;

  const linkClass = (path: string) =>
    `text-[15px] font-medium transition-colors duration-150 ${
      isActive(path) ? "text-primary" : "text-foreground/80 hover:text-primary"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          isScrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3" data-testid="link-home">
            <div
              aria-hidden="true"
              style={{
                width: 52,
                height: 52,
                backgroundImage: `url(${logoMark})`,
                backgroundSize: "500%",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                flexShrink: 0,
              }}
            />
            <div className="flex flex-col leading-none">
              <span className="text-[1.25rem] font-black text-foreground tracking-tight">
                Color<span className="text-primary">Stack</span>
              </span>
              <span className="text-[0.7rem] font-bold text-foreground/50 tracking-widest uppercase mt-0.5">
                UT Dallas
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
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

            {/* About Us dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setAboutOpen(!aboutOpen)}
                className={`flex items-center gap-1 text-[15px] font-medium transition-colors duration-150 ${
                  isActive("/about") ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
                data-testid="dropdown-about"
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
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-1.5 text-[#114634] hover:text-[#EC7524] transition-colors duration-150"
                >
                  <Icon size={18} strokeWidth={1.8} />
                </a>
              ))}
            </div>

            <Link href="/join" data-testid="link-join">
              <button className="bg-primary text-white text-[14px] font-semibold px-5 py-2 rounded-full hover:bg-primary/90 transition-all hover:-translate-y-px">
                Join
              </button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground/70 hover:text-foreground p-2 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-white">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {[
                { name: "Events", path: "/events" },
                { name: "Sponsors", path: "/sponsors" },
                { name: "Meet Us", path: "/board" },
                { name: "Resources", path: "/resources" },
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

      <main className="flex-1 pt-16">
        {children}
      </main>

      <footer className="bg-[#1a1a1a] text-white py-14 mt-auto">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-5">
              <img src={logo} alt="ColorStack at UTD" className="h-10 w-auto rounded-lg object-contain" />
            </div>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              We Get Our Members Cracked. Then We Make Sure The World Knows It.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "Events", path: "/events" },
                { name: "Sponsors", path: "/sponsors" },
                { name: "Meet the Board", path: "/board" },
                { name: "Resources", path: "/resources" },
                { name: "About Us", path: "/about" },
                { name: "Join", path: "/join" },
              ].map((l) => (
                <li key={l.path}>
                  <Link href={l.path} className="text-white/60 hover:text-white text-sm transition-colors" data-testid={`footer-link-${l.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Connect</h4>
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
                  <Icon size={15} strokeWidth={1.8} className="text-white/40" />
                  {handle}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} ColorStack at UT Dallas. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
