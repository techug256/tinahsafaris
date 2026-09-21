import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/safaris', label: 'Safaris & Tours' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-forest-dark text-cream text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="tel:+256707667448" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} />
              <span>+256 707 667 448</span>
            </a>
            <a href="mailto:dixongreenleaf@gmail.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={12} />
              <span>dixongreenleaf@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={12} />
            <span>Kampala, Uganda</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-forest/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-forest py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
              <span className="text-forest font-bold text-lg font-heading">T</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-cream font-heading tracking-wide group-hover:text-gold transition-colors">
                Tinah Safaris
              </h1>
              <p className="text-gold-light text-[10px] uppercase tracking-[0.2em]">Uganda</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-cream hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/256707667448"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-forest-dark px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block text-base font-medium py-2 border-b border-white/10 ${
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-cream'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/256707667448"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gold text-forest-dark text-center px-5 py-3 rounded-full font-semibold mt-4"
            >
              Book Now on WhatsApp
            </a>
            <div className="text-cream/70 text-sm space-y-2 pt-2">
              <a href="tel:+256707667448" className="flex items-center gap-2">
                <Phone size={14} /> +256 707 667 448
              </a>
              <a href="mailto:dixongreenleaf@gmail.com" className="flex items-center gap-2">
                <Mail size={14} /> dixongreenleaf@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
