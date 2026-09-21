import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-forest-dark text-cream">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-gold hover:bg-gold-light text-forest-dark py-3 flex items-center justify-center gap-2 transition-colors font-semibold"
      >
        <ArrowUp size={18} />
        Back to Top
      </button>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-forest font-bold text-lg font-heading">T</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading">Tinah Safaris</h3>
                <p className="text-gold text-[10px] uppercase tracking-[0.2em]">Uganda</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Your trusted partner for unforgettable wildlife adventures in the heart of Africa. 
              Experience Uganda's pristine wilderness with expert local guides.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 bg-white/10 hover:bg-gold rounded-full flex items-center justify-center transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/safaris', label: 'Safaris & Tours' },
                { to: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-cream/70 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Popular Tours</h4>
            <ul className="space-y-3">
              {[
                'Gorilla Trekking',
                'Murchison Falls Safari',
                'Queen Elizabeth Park',
                'Chimpanzee Tracking',
                'Lake Bunyonyi Escape',
              ].map((tour) => (
                <li key={tour}>
                  <Link to="/safaris" className="text-cream/70 hover:text-gold transition-colors text-sm">
                    {tour}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/256707667448" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-cream/70 hover:text-gold transition-colors text-sm">
                  <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>+256 707 667 448<br/><span className="text-xs text-gold">WhatsApp Available</span></span>
                </a>
              </li>
              <li>
                <a href="mailto:dixongreenleaf@gmail.com" className="flex items-start gap-3 text-cream/70 hover:text-gold transition-colors text-sm">
                  <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                  <span>dixongreenleaf@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                <span>Kampala, Uganda<br/>East Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/50 text-sm">
            &copy; {new Date().getFullYear()} Tinah Safaris. All rights reserved.
          </p>
          <p className="text-cream/50 text-sm">
            Designed with passion for Uganda's wilderness
          </p>
        </div>
      </div>
    </footer>
  );
}
