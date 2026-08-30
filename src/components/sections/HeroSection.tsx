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
      icon: <UserCheck className="w-5 h-5 text-slate-900" />,
      title: 'Atención 100% Directa',
      description: 'Trato personalizado de principio a fin, sin intermediarios.',
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-slate-900" />,
      title: 'Tasación con Datos Reales',
      description: 'Precios fundamentados en operaciones reales de cierre.',
    },
    {
      icon: <Megaphone className="w-5 h-5 text-slate-900" />,
      title: 'Marketing Digital Activo',
      description: 'Fotografía profesional y difusión destacada en portales.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-slate-900" />,
      title: 'Seguridad Notarial',
      description: 'Coordinación legal completa hasta la firma de escrituración.',
    },
  ];

  return (
    <section id="inicio" className="scroll-mt-24 relative pt-4 sm:pt-8 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Hero Card Container */}
        <div className="relative rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 lg:p-16 text-center space-y-7 shadow-xs">
          {/* Top Badge */}
          <div className="flex justify-center">
            <Badge variant="default" size="md" icon={<MapPin className="w-3.5 h-3.5 text-slate-600" />}>
              Asesoramiento Inmobiliario &bull; Montevideo
            </Badge>
          </div>

          {/* Heading and Subtitle */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.12]">
              Vendé tu propiedad al valor real de mercado con atención personalizada
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Estrategia de comercialización a medida, análisis comparativo de mercado y acompañamiento 1 a 1 en los principales barrios de Montevideo.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto sm:max-w-none">
            <a href="#tasacion" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Tasación Sin Costo
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
                className="w-full sm:w-auto text-sm sm:text-base"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                Conversar por WhatsApp
              </Button>
            </a>
          </div>

          {/* Target Zones Pills */}
          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
              Zonas de foco:
            </span>
            {siteConfig.location.targetZones.map((zone) => (
              <span
                key={zone}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
              >
                {zone}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Trust Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
