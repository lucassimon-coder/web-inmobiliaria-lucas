import {
  Sparkles,
  CheckCircle2,
  Clock,
  BarChart3,
  Layers,
  ArrowRight,
  MessageCircle,
  Building2,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../constants/siteConfig';

export function WhyChooseMeSection() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-slate-900" />,
      title: 'Dedicación Exclusiva',
      subtitle: 'Cartera selecta y acotada',
      description:
        'A diferencia de agencias que acumulan cientos de propiedades, gestiono un número acotado para dedicar el 100% de la atención y seguimiento a cada una.',
      highlights: [
        'Atención 1 a 1 de principio a fin.',
        'Presencia activa en cada visita.',
        'Enfoque en vender al mejor valor en el menor tiempo.',
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-slate-900" />,
      title: 'Comunicación Fluida & Reportes',
      subtitle: 'Transparencia total',
      description:
        'Informes periódicos con métricas de interesados, comentarios de visitas y evolución del mercado en tu zona de Montevideo.',
      highlights: [
        'Reportes de interesados calificados.',
        'Feedback inmediato post-visita.',
        'Estrategia flexible basada en datos.',
      ],
    },
    {
      icon: <Clock className="w-5 h-5 text-slate-900" />,
      title: 'Estrategia Comercial a Medida',
      subtitle: 'Plan adaptado a tu situación',
      description:
        'Diseñamos un plan de comercialización acorde a tus plazos, expectativas y condiciones, cuidando siempre el valor patrimonial.',
      highlights: [
        'Perfilamiento del comprador ideal.',
        'Campañas segmentadas de difusión.',
        'Defensa sólida del precio de publicación.',
      ],
    },
  ];

  const values = [
    { label: 'Compromiso', desc: 'Involucramiento total en cada fase' },
    { label: 'Transparencia', desc: 'Claridad en precios y condiciones' },
    { label: 'Disponibilidad', desc: 'Respuesta ágil por WhatsApp y llamadas' },
    { label: 'Conocimiento Local', desc: 'Precios reales en Montevideo' },
  ];

  return (
    <section id="por-que-elegirme" className="scroll-mt-24 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Diferenciales y Metodología
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Por qué elegir un Asesor Personal
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Un profesional dedicado exclusivamente a defender tus intereses con honestidad y el respaldo de Inmobiliaria Imperium.
          </p>
        </div>

        {/* Core Values Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1"
            >
              <h3 className="text-sm sm:text-base font-bold text-slate-900">{v.label}</h3>
              <p className="text-xs text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              variant="elevated"
              hoverEffect
              className="flex flex-col justify-between"
            >
              <CardHeader className="space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {pillar.subtitle}
                  </span>
                  <CardTitle className="text-lg mt-0.5">{pillar.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-1">
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrated Conversion Callout */}
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center space-y-6 shadow-md">
          <div className="space-y-2 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.name} &bull; {siteConfig.agency.name}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Querés saber cuánto vale tu propiedad hoy?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Te brindo un diagnóstico preliminar del mercado en tu barrio y las alternativas recomendadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1 max-w-md mx-auto sm:max-w-none">
            <a href="#tasacion" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white text-slate-950 hover:bg-slate-100 border-white"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Solicitar Valoración
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
                className="w-full sm:w-auto"
                leftIcon={<MessageCircle className="w-5 h-5" />}
              >
                Conversar por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
