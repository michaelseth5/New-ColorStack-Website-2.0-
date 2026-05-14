import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const utdIcon = `${BASE}/utd-icon.png`;

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
          <Link href="/" className="flex items-center gap-3" data-testid="link-home">
            <img src={utdIcon} alt="UTD" className="h-8 w-8 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-foreground font-extrabold text-[22px] tracking-tight">ColorStack</span>
              <span className="text-primary font-bold text-[11px] tracking-[0.12em] uppercase">at UTD</span>
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
                { name: "About", path: "/about" },
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
            <div className="flex items-center gap-3 mb-5">
              <img src={utdIcon} alt="UTD" className="h-8 w-8 object-contain opacity-90" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-[22px] tracking-tight">ColorStack</span>
                <span className="text-primary font-bold text-[11px] tracking-[0.12em] uppercase">at UTD</span>
              </div>
            </div>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed">
              Increasing the number of Black and Latinx students who graduate with computing degrees and go on to thrive in tech careers.
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
                { name: "About Us", path: "/about" },
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
            <h4 className="font-bold text-sm uppercase tracking-widest text-white/40 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>UT Dallas</li>
              <li>800 W Campbell Rd</li>
              <li>Richardson, TX 75080</li>
              <li className="pt-1">
                <a href="mailto:colorstackutd@utdallas.edu" className="text-primary hover:underline transition-colors" data-testid="footer-link-email">
                  colorstackutd@utdallas.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 mt-12 pt-8 border-t border-white/10 text-center text-white/30 text-xs">
          &copy; {new Date().getFullYear()} ColorStack at UT Dallas. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
