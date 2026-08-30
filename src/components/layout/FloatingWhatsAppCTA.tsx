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
        className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-xs font-semibold text-slate-200 shadow-xl shadow-black/40 group-hover:border-[#25D366]/50 group-hover:text-white transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <span>¿Querés vender o tasar tu propiedad? Escribime</span>
      </a>

      {/* Main Floating Button */}
      <a
        href={siteConfig.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear con Simon Mantuani por WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-neutral-950 shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
      >
        {/* Subtle pulsing background glow ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-neutral-950 stroke-none relative z-10" />
      </a>
    </div>
  );
}
