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
      icon: <Globe2 className="w-5 h-5 text-emerald-400" />,
      title: 'Máxima Difusión en Red',
      description: 'Tu propiedad se potencia con el alcance digital, portales líderes y la red de contactos de Imperium.',
    },
    {
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
      title: 'Compradores Calificados',
      description: 'Acceso directo a una base continua de inversores y familias en búsqueda activa en Montevideo.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Solidez Notarial y Jurídica',
      description: 'Soporte profesional integral para garantizar transacciones 100% transparentes y seguras.',
    },
  ];

  return (
    <section id="respaldo" className="scroll-mt-28 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel border border-slate-800/90 p-8 sm:p-12 lg:p-14 overflow-hidden shadow-2xl space-y-10">
          {/* Ambient lighting inside container */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-800/40 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5" />}>
                  {siteConfig.agency.badge}
                </Badge>
                <Badge variant="default">Montevideo, UY</Badge>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Atención personalizada con el respaldo de una firma líder
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Combino la dedicación cercana de un agente personal con la infraestructura, cartera y fuerza comercial de{' '}
                <strong className="text-white font-semibold">{siteConfig.agency.name}</strong>.
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
                  className="w-full justify-center bg-slate-900/80 hover:bg-slate-800 border-slate-700 hover:border-emerald-500/50"
                  rightIcon={<ExternalLink className="w-4 h-4 text-emerald-400" />}
                >
                  Ver Cartera en Imperium
                </Button>
              </a>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {adv.icon}
                </div>
                <h3 className="text-base font-bold text-white">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>

          {/* Trust callout footer */}
          <div className="relative z-10 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-300">
              💡 <span className="font-semibold text-white">¿Buscás comprar o invertir?</span> Tenés a disposición todo el catálogo activo de Inmobiliaria Imperium con mi asesoramiento directo.
            </p>
            <a href="#tasacion" className="shrink-0 w-full sm:w-auto">
              <Button variant="primary" size="sm" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Tasá tu Inmueble con Nosotros
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
