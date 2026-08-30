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
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: 'Dedicación Exclusiva y Cartera Acotada',
      subtitle: 'Calidad de gestión por sobre volumen masivo',
      description:
        'A diferencia de las agencias tradicionales que acumulan cientos de propiedades y las dejan estancadas en portales, trabajo con un número selecto de inmuebles para dedicar el 100% de mi tiempo, estrategia y seguimiento a cada uno.',
      highlights: [
        'Atención personalizada 1 a 1 de principio a fin.',
        'Presencia activa del asesor en cada visita a tu hogar.',
        'Enfoque prioritario en lograr la venta en el menor tiempo.',
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
      title: 'Comunicación Fluida & Reportes Reales',
      subtitle: 'Transparencia total sin falsas expectativas',
      description:
        'Sabrás exactamente qué sucede con tu propiedad en todo momento. Recibirás informes periódicos con las métricas de interesados, comentarios de visitas y análisis de la competencia en tu zona de Montevideo.',
      highlights: [
        'Reportes de visualizaciones e interesados calificados.',
        'Feedback inmediato tras cada recorrido con compradores.',
        'Ajustes estratégicos continuos basados en datos reales.',
      ],
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: 'Estrategia Comercial a Medida',
      subtitle: 'Cada inmueble y propietario tienen necesidades únicas',
      description:
        'No existen fórmulas genéricas. Diseñamos un plan de comercialización adaptado a tus plazos, expectativas y condiciones particulares, cuidando la discreción y el valor patrimonial de tu inmueble.',
      highlights: [
        'Análisis de perfil del comprador ideal para tu tipología.',
        'Campañas personalizadas de marketing digital.',
        'Defensa sólida del precio de publicación frente a ofertas.',
      ],
    },
  ];

  const values = [
    { label: 'Compromiso', desc: 'Involucramiento total en cada fase' },
    { label: 'Transparencia', desc: 'Claridad en precios, honorarios y condiciones' },
    { label: 'Disponibilidad', desc: 'Respuesta ágil por WhatsApp y llamadas' },
    { label: 'Conocimiento Local', desc: 'Dominio de precios de cierre en Montevideo' },
  ];

  return (
    <section id="por-que-elegirme" className="scroll-mt-28 py-16 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Header & Personal Presentation */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Diferenciales y Metodología
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por qué elegir un Asesor Personal vs. una Inmobiliaria Tradicional
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Vender una propiedad es una de las decisiones patrimoniales más importantes. Mi objetivo es que tengas a un profesional dedicado exclusivamente a defender tus intereses con honestidad y rigor técnico.
          </p>
        </div>

        {/* Core Values Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.label}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-center space-y-1 backdrop-blur-sm"
            >
              <h3 className="text-base font-bold text-emerald-400">{v.label}</h3>
              <p className="text-xs text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              variant="elevated"
              hoverEffect
              className="flex flex-col justify-between p-2"
            >
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    {pillar.subtitle}
                  </span>
                  <CardTitle className="text-xl mt-1">{pillar.title}</CardTitle>
                </div>
                <CardDescription className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2">
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {pillar.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integrated Conversion Callout */}
        <div className="rounded-3xl glass-panel border border-slate-800/80 p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-2xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs text-slate-300">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{siteConfig.name} &bull; Asesor Inmobiliario Montevideo</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Querés saber cuánto vale tu propiedad hoy?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hablemos sin compromiso. Te brindaré un diagnóstico preliminar del mercado en tu barrio y las alternativas comerciales recomendadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10 max-w-md mx-auto sm:max-w-none">
            <a href="#contacto" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base"
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
                className="w-full sm:w-auto text-sm sm:text-base"
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
