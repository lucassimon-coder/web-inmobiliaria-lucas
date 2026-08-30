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
import { Button } from '../ui/Button';
import { siteConfig } from '../../constants/siteConfig';

export function ServicesSection() {
  const services = [
    {
      icon: <Calculator className="w-6 h-6 text-emerald-400" />,
      title: 'Valoración Profesional de Mercado',
      description: 'Estimación precisa y realista basada en la oferta actual y en operaciones concretas cerradas en Montevideo.',
      benefits: [
        'Análisis Comparativo de Mercado (ACM) actualizado.',
        'Evaluación de metraje, estado, orientación y gastos comunes.',
        'Estrategia de precio óptimo para no quemar la propiedad en portales.',
      ],
      ctaText: 'Solicitar Tasación',
      ctaHref: '#contacto',
    },
    {
      icon: <Camera className="w-6 h-6 text-emerald-400" />,
      title: 'Plan de Comercialización & Difusión',
      description: 'Presentación de alto impacto visual y difusión activa para captar a los compradores calificados más rápido.',
      benefits: [
        'Producción fotográfica profesional destacando los mejores atributos.',
        'Posicionamiento prioritario en los principales portales de Uruguay.',
        'Difusión dirigida en redes sociales y base de contactos de inversores.',
      ],
      ctaText: 'Ver Plan de Difusión',
      ctaHref: '#contacto',
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-400" />,
      title: 'Calificación de Compradores & Visitas',
      description: 'Filtramos con rigurosidad a los interesados para cuidar tu tiempo, privacidad y la seguridad de tu hogar.',
      benefits: [
        'Verificación previa de solvencia económica e interés genuino.',
        'Coordinación ordenada de visitas con registro y aviso anticipado.',
        'Devolución detallada post-visita con el feedback de cada interesado.',
      ],
      ctaText: 'Consultar por Visitas',
      ctaHref: '#contacto',
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-emerald-400" />,
      title: 'Negociación & Cierre Notarial',
      description: 'Defensa estratégica del valor de tu inmueble y gestión documental transparente hasta la firma final.',
      benefits: [
        'Negociación profesional defendiendo tus márgenes y condiciones.',
        'Revisión y acompañamiento en reservas y compromisos de compraventa.',
        'Coordinación directa con escribanos para una escrituración sin fricción.',
      ],
      ctaText: 'Asesorarme en Negociación',
      ctaHref: '#contacto',
    },
  ];

  return (
    <section id="servicios" className="scroll-mt-28 py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="accent">Servicios para Propietarios</Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cómo te ayudo a vender tu inmueble
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Un servicio integral y transparente diseñado para maximizar el valor de tu propiedad en Montevideo y simplificar cada etapa del proceso.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              variant="elevated"
              hoverEffect
              className="flex flex-col justify-between p-2"
            >
              <div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-slate-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Qué incluye este servicio:
                  </p>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>

              <CardFooter className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a href={service.ctaHref} className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 group">
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span className="hidden sm:inline">WhatsApp directo</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-slate-900/40 border border-emerald-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-lg font-bold text-white">¿Tenés una consulta específica sobre tu propiedad?</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Analizamos tu caso puntual sin costo y te indicamos la mejor estrategia según la zona de Montevideo.
            </p>
          </div>
          <a href="#contacto" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Solicitar Asesoramiento
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
