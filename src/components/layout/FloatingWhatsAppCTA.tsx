import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';

export function FloatingWhatsAppCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group">
      {/* Desktop Tooltip / Pill Badge */}
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-semibold text-slate-800 shadow-md shadow-slate-200/60 group-hover:border-[#25D366]/50 group-hover:text-black transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>¿Buscás vender o tasar tu propiedad? Escribime</span>
      </a>

      {/* Main Floating Button */}
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear con Simon Mantuani por WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6.5 h-6.5 fill-white stroke-none relative z-10" />
      </a>
    </div>
  );
}
