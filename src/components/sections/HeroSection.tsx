import {
  MessageCircle,
  ArrowRight,
  UserCheck,
  TrendingUp,
  Megaphone,
  ShieldCheck,
  MapPin,
} from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export function HeroSection() {
  const trustPillars = [
    {
      icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Atención 100% Directa',
      description: 'Trato personalizado con Simon Mantuani, sin secretarias ni intermediarios.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: 'Tasación con Datos Reales',
      description: 'Valores sustentados en operaciones concretas cerradas en Montevideo.',
    },
    {
      icon: <Megaphone className="w-5 h-5 text-emerald-400" />,
      title: 'Marketing Digital Activo',
      description: 'Fotografía profesional y difusión destacada en portales líderes y redes.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Seguridad Jurídica',
      description: 'Acompañamiento y coordinación notarial completa hasta la escrituración.',
    },
  ];

  return (
    <section id="inicio" className="scroll-mt-28 relative pt-6 sm:pt-10 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-slate-800/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Main Hero Card Container */}
        <div className="relative rounded-3xl glass-panel border border-slate-800/80 p-6 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl shadow-black/40">
          {/* Top Badge */}
          <div className="flex justify-center">
            <Badge variant="accent" size="md" icon={<MapPin className="w-3.5 h-3.5" />}>
              Asesoramiento Inmobiliario Personalizado &bull; Montevideo
            </Badge>
          </div>

          {/* Heading and Subtitle */}
          <div className="space-y-5 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Vendé tu propiedad al{' '}
              <span className="accent-gradient-text">valor real de mercado</span> y con total tranquilidad
            </h1>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
              Estrategia de comercialización a medida, análisis comparativo de mercado y acompañamiento directo de principio a fin en los principales barrios de Montevideo.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 max-w-md mx-auto sm:max-w-none">
            <a href="#contacto" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-base shadow-xl shadow-emerald-950/50"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Valoración Sin Costo
              </Button>
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto text-base"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                Conversar por WhatsApp
              </Button>
            </a>
          </div>

          {/* Target Zones Pills */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
              Zonas de Foco:
            </span>
            {siteConfig.location.targetZones.map((zone) => (
              <span
                key={zone}
                className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-medium text-slate-300"
              >
                {zone}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm space-y-3 hover:border-emerald-500/30 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
