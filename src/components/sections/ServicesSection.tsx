import {
  Calculator,
  Camera,
  Users,
  FileCheck2,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { siteConfig } from '../../constants/siteConfig';

export function ServicesSection() {
  const services = [
    {
      icon: <Calculator className="w-5 h-5 text-slate-900" />,
      title: 'Valoración Profesional de Mercado',
      description: 'Estimación precisa y realista basada en la oferta actual y operaciones reales en Montevideo.',
      benefits: [
        'Análisis Comparativo de Mercado (ACM) actualizado.',
        'Evaluación de metraje, estado, orientación y gastos.',
        'Estrategia de precio óptimo de salida.',
      ],
      ctaText: 'Solicitar Tasación',
      ctaHref: '#tasacion',
    },
    {
      icon: <Camera className="w-5 h-5 text-slate-900" />,
      title: 'Plan de Comercialización & Difusión',
      description: 'Presentación de alto impacto visual para captar a compradores calificados rápidamente.',
      benefits: [
        'Producción fotográfica destacando los mejores atributos.',
        'Posicionamiento prioritario en portales líderes de Uruguay.',
        'Difusión dirigida en redes y red Inmobiliaria Imperium.',
      ],
      ctaText: 'Ver Plan de Difusión',
      ctaHref: '#tasacion',
    },
    {
      icon: <Users className="w-5 h-5 text-slate-900" />,
      title: 'Filtro de Compradores & Visitas',
      description: 'Filtramos con rigurosidad a los interesados para cuidar tu tiempo y la seguridad de tu hogar.',
      benefits: [
        'Verificación de solvencia e interés genuino de compra.',
        'Coordinación ordenada de visitas con aviso previo.',
        'Devolución detallada con feedback post-visita.',
      ],
      ctaText: 'Consultar por Visitas',
      ctaHref: '#tasacion',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-slate-900" />,
      title: 'Negociación & Cierre Notarial',
      description: 'Defensa estratégica del valor de tu inmueble y gestión documental transparente hasta la firma final.',
      benefits: [
        'Negociación profesional defendiendo tus condiciones.',
        'Acompañamiento en reservas y compromisos de compraventa.',
        'Coordinación directa con escribanos.',
      ],
      ctaText: 'Asesorarme en Negociación',
      ctaHref: '#tasacion',
    },
  ];

  return (
    <section id="servicios" className="scroll-mt-24 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="default">Servicios para Propietarios</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Cómo te ayudo a vender tu inmueble
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Un servicio integral y transparente diseñado para maximizar el valor de tu propiedad en Montevideo.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              variant="elevated"
              hoverEffect
              className="flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-1">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-slate-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2.5 pt-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Qué incluye este servicio:
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <CardFooter className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <a href={service.ctaHref} className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-black transition-colors flex items-center gap-1 group">
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-[#25D366] transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="hidden sm:inline">WhatsApp directo</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
