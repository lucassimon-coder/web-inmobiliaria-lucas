import { useState, useEffect } from 'react';
import { Menu, X, Building2, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-slate-950/50 backdrop-blur-sm border-b border-white/5 py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity */}
          <a
            href="#inicio"
            onClick={handleNavClick}
            className="flex items-center gap-3 group select-none outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-slate-900 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/60 group-hover:scale-105 transition-all duration-200 shadow-sm shadow-emerald-950">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400 -mt-0.5 tracking-wide">
                {siteConfig.role} &bull; Montevideo
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegación principal">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg transition-colors hover:bg-slate-800/50 outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors px-2 py-1"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <a href="#tasacion">
              <Button variant="primary" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Tasar Propiedad
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 lg:hidden flex flex-col bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/80 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            <nav className="flex flex-col space-y-2" aria-label="Menú móvil">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-white hover:bg-slate-900/80 border border-transparent hover:border-slate-800 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <a href="#tasacion" onClick={handleNavClick} className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-center" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Quiero Vender / Tasar
                </Button>
              </a>

              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="whatsapp" size="lg" className="w-full justify-center" leftIcon={<MessageCircle className="w-5 h-5" />}>
                  Consultar por WhatsApp
                </Button>
              </a>
            </div>

            <div className="pt-2 text-center text-xs text-slate-400">
              <p className="font-medium text-slate-300">{siteConfig.location.display}</p>
              <p className="mt-1 text-[11px] text-slate-400">{siteConfig.contact.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
