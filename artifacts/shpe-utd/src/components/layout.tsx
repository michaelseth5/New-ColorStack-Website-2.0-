import { Link, useLocation } from "wouter";
import { Menu, X, Layers } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Events", path: "/events" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Meet the Board", path: "/board" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-secondary/95 backdrop-blur-sm shadow-sm py-3" : "bg-secondary py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home">
            <div className="bg-primary p-1.5 rounded text-white group-hover:scale-105 transition-transform">
              <Layers size={20} strokeWidth={2.5} />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">ColorStack at UTD</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path ? "text-primary border-b-2 border-primary pb-1" : "text-white"
                }`}
                data-testid={`link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold px-6" data-testid="button-join-nav">
              Join ColorStack
            </Button>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-secondary border-t border-white/10 shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium p-2 rounded-md ${
                    location === link.path ? "bg-primary/20 text-primary" : "text-white hover:bg-white/5"
                  }`}
                  data-testid={`link-mobile-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {link.name}
                </Link>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full mt-2" data-testid="button-join-mobile">
                Join ColorStack
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 mt-20">
        {children}
      </main>

      <footer className="bg-secondary text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-1.5 rounded text-white">
                <Layers size={20} strokeWidth={2.5} />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">ColorStack at UTD</span>
            </div>
            <p className="text-white/70 max-w-sm mb-6">
              Empowering Black and Latinx computing students at UT Dallas to enter and excel in careers in tech.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-primary transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link href="/events" className="text-white/70 hover:text-primary transition-colors" data-testid="footer-link-events">Events</Link></li>
              <li><Link href="/sponsors" className="text-white/70 hover:text-primary transition-colors" data-testid="footer-link-sponsors">Sponsors</Link></li>
              <li><Link href="/board" className="text-white/70 hover:text-primary transition-colors" data-testid="footer-link-board">Meet the Board</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors" data-testid="footer-link-about">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/70">The University of Texas at Dallas</li>
              <li className="text-white/70">800 W Campbell Rd</li>
              <li className="text-white/70">Richardson, TX 75080</li>
              <li><a href="mailto:colorstackutd@utdallas.edu" className="text-primary hover:underline transition-colors" data-testid="footer-link-email">colorstackutd@utdallas.edu</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} ColorStack at UT Dallas. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
