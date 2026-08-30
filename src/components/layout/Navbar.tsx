import { useState, useEffect } from 'react';
import { Menu, X, Building2, MessageCircle, ArrowRight, ChevronRight, Mail, Phone } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <>
      {/* Primary Sticky Header (z-50) */}
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-200',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/60 py-4'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Identity */}
            <a
              href="#inicio"
              onClick={handleNavClick}
              className="flex items-center gap-2.5 group select-none outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover:bg-zinc-800 transition-colors">
                <Building2 className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-bold text-slate-900 tracking-tight leading-none group-hover:text-black">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-1">
                  {siteConfig.role} &bull; Montevideo
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-950 rounded-lg transition-colors hover:bg-slate-100/80 outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
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
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#25D366] transition-colors px-2 py-1"
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

            {/* Mobile Actions: WhatsApp Icon + Hamburger Trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp directo"
                className="p-2 rounded-xl bg-emerald-50 text-[#25D366] border border-emerald-200 active:scale-95 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-black hover:bg-slate-200 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 cursor-pointer"
                aria-label="Abrir menú de navegación"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dedicated Mobile Fullscreen Overlay & Drawer (z-[60]) */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación móvil"
          className="fixed inset-0 z-[60] lg:hidden flex flex-col bg-white animate-in fade-in duration-150"
        >
          {/* Top Bar of Mobile Drawer */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-200 bg-white/95 backdrop-blur-md">
            <a
              href="#inicio"
              onClick={handleNavClick}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-xs">
                <Building2 className="w-4.5 h-4.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-bold text-slate-900 tracking-tight leading-none">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-medium text-slate-500 tracking-wide mt-1">
                  {siteConfig.role} &bull; Montevideo
                </span>
              </div>
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 hover:text-black hover:bg-slate-200 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Content inside Drawer */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            <nav className="flex flex-col space-y-1" aria-label="Enlaces de navegación móvil">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-semibold text-slate-800 hover:text-black hover:bg-slate-50 border-b border-slate-100 last:border-0 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </nav>

            {/* Direct CTA Action Buttons */}
            <div className="pt-2 space-y-3">
              <a href="#tasacion" onClick={handleNavClick} className="block w-full">
                <Button variant="primary" size="lg" className="w-full justify-center text-base" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Solicitar Tasación Sin Costo
                </Button>
              </a>

              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button variant="whatsapp" size="lg" className="w-full justify-center text-base" leftIcon={<MessageCircle className="w-5 h-5" />}>
                  Consultar por WhatsApp
                </Button>
              </a>
            </div>

            {/* Contact Details in Drawer with Active mailto: and tel: links */}
            <div className="pt-4 border-t border-slate-200 text-center text-xs space-y-2">
              <p className="font-semibold text-slate-800">{siteConfig.name} &bull; {siteConfig.agency.name}</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-1.5 text-slate-700 hover:text-black font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div>
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="inline-flex items-center justify-center gap-1.5 text-slate-700 hover:text-black font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
