import { Building2, MapPin, Phone, Mail, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Brand & Authority */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white shadow-xs">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  {siteConfig.name}
                </span>
                <p className="text-xs font-semibold text-slate-600">
                  {siteConfig.role} &bull; {siteConfig.agency.name}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {siteConfig.valueProposition}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Gestión transparente y personalizada</span>
            </div>
          </div>

          {/* Column 2: Zonas de Cobertura */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-700" />
              Zonas de Montevideo
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm text-slate-600">
              {siteConfig.location.targetZones.map((zone) => (
                <li key={zone}>
                  <a
                    href="#tasacion"
                    className="hover:text-black transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-slate-900 transition-colors" />
                    <span>{zone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navegación Rápida */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-slate-950 transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-slate-900 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto Directo & Redes */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Contacto Directo
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-black transition-colors p-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-slate-500">WhatsApp / Teléfono</p>
                  <p className="text-sm font-semibold text-slate-900">{siteConfig.contact.phoneDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-slate-700 hover:text-black transition-colors p-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-2xs"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-medium text-slate-500">Correo Electrónico</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{siteConfig.contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-2 pt-1">
                {/* Instagram Icon */}
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Simon Mantuani"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-300 shadow-2xs transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn Icon */}
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Simon Mantuani"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-300 shadow-2xs transition-all"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* Phone Call Icon */}
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  aria-label="Llamar a Simon Mantuani"
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-300 shadow-2xs transition-all"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-slate-500">
            {siteConfig.role} &bull; {siteConfig.agency.name} &bull; Montevideo, Uruguay
          </p>
        </div>
      </div>
    </footer>
  );
}
