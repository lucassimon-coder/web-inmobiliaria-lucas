import {
  ExternalLink,
  ShieldCheck,
  Globe2,
  Users2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../../constants/siteConfig';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function AgencyBackingSection() {
  const advantages = [
    {
      icon: <Globe2 className="w-5 h-5 text-slate-900" />,
      title: 'Máxima Difusión en Red',
      description: 'Tu propiedad se potencia con el alcance de portales líderes y la red de contactos de Imperium.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-slate-900" />,
      title: 'Compradores Calificados',
      description: 'Acceso directo a una base continua de inversores y familias en búsqueda activa en Montevideo.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-slate-900" />,
      title: 'Solidez Notarial & Jurídica',
      description: 'Soporte profesional integral para garantizar operaciones 100% transparentes y seguras.',
    },
  ];

  return (
    <section id="respaldo" className="scroll-mt-24 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5" />}>
                  {siteConfig.agency.badge}
                </Badge>
                <Badge variant="default">Montevideo, UY</Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Atención personalizada con el respaldo de una firma líder
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Combino la cercanía de un agente personal dedicado con la infraestructura, cartera y fuerza comercial de{' '}
                <strong className="text-slate-900 font-semibold">{siteConfig.agency.name}</strong>.
              </p>
            </div>

            {/* Link to Imperium official catalog */}
            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href={siteConfig.agency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  size="md"
                  className="w-full justify-center"
                  rightIcon={<ExternalLink className="w-4 h-4 text-slate-600" />}
                >
                  Ver Cartera en Imperium
                </Button>
              </a>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5"
              >
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                  {adv.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust callout footer */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-700">
              💡 <span className="font-semibold text-slate-900">¿Buscás comprar o invertir?</span> Tenés a disposición todo el catálogo activo de Inmobiliaria Imperium con mi asesoramiento directo.
            </p>
            <a href="#tasacion" className="shrink-0 w-full sm:w-auto">
              <Button variant="primary" size="sm" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Tasá tu Inmueble
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
