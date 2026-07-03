import Logo from "@/assets/favicon-32x32.png";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/site";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const useSolidHeader = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      setShowMobileMenu(true);
    } else {
      const timeout = setTimeout(() => setShowMobileMenu(false), 250);
      return () => clearTimeout(timeout);
    }
  }, [isMobileMenuOpen]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors font-medium ${
      useSolidHeader
        ? isActive
          ? "text-primary border-b-2 border-primary pb-0.5"
          : "text-foreground hover:text-primary"
        : isActive
          ? "text-white border-b-2 border-white pb-0.5"
          : "text-white/90 hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    `text-left font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidHeader
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-border/50"
          : "bg-primary/20 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 focus:outline-none" aria-label="TFF Home">
            <img src={Logo} alt="TFF Logo" className="w-10 h-10 shadow-lg object-cover rounded" />
            <div className="flex flex-col ml-2">
              <span
                className={`text-xl font-semibold leading-tight transition-colors ${useSolidHeader ? "text-primary" : "text-white"}`}
              >
                TFF
              </span>
              <span
                className={`text-xs transition-colors ${useSolidHeader ? "text-muted-foreground" : "text-white/70"}`}
              >
                Translational Futures
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className={useSolidHeader ? "bg-primary hover:bg-primary/90" : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"}>
              <Link to="/donate">Support Our Mission</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 focus:outline-none transition-all duration-300 ${useSolidHeader ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"} ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {showMobileMenu && (
          <div
            id="mobile-menu"
            className={`lg:hidden transition-all duration-300 py-6 border-t border-border/30 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink key={link.path} to={link.path} className={mobileNavClass}>
                  {link.label}
                </NavLink>
              ))}
              <Button asChild className="mt-4 w-full bg-primary hover:bg-primary/90 text-white">
                <Link to="/donate">Support Our Mission</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
