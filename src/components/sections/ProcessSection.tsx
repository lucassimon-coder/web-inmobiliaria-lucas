import {
  Calculator,
  Camera,
  UserCheck,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: <Calculator className="w-5 h-5 text-slate-900" />,
      title: 'Análisis y Tasación Real',
      subtitle: 'Diagnóstico en 24-48hs sin costo',
      description:
        'Visitamos tu inmueble, analizamos m², estado y operaciones reales cerradas en tu barrio para fijar el precio de salida óptimo.',
      keyTakeaway: 'Precio competitivo con datos reales.',
    },
    {
      number: '02',
      icon: <Camera className="w-5 h-5 text-slate-900" />,
      title: 'Preparación y Marketing Digital',
      subtitle: 'Máximo impacto visual',
      description:
        'Producción fotográfica cuidada, redacción atractiva y publicación prioritaria en portales y red Inmobiliaria Imperium.',
      keyTakeaway: 'Destacado frente a la competencia.',
    },
    {
      number: '03',
      icon: <UserCheck className="w-5 h-5 text-slate-900" />,
      title: 'Filtro y Visitas Calificadas',
      subtitle: 'Seguridad y tranquilidad',
      description:
        'Calificamos a los interesados antes de visitar tu hogar verificando solvencia e intención de compra. Cero curiosos.',
      keyTakeaway: 'Solo compradores calificados.',
    },
    {
      number: '04',
      icon: <Award className="w-5 h-5 text-slate-900" />,
      title: 'Negociación y Cierre Notarial',
      subtitle: 'Acompañamiento hasta la firma',
      description:
        'Defendemos las condiciones económicas de tu venta, gestionamos la seña y coordinamos con los escribanos hasta la firma.',
      keyTakeaway: 'Operación 100% segura.',
    },
  ];

  return (
    <section id="proceso" className="scroll-mt-24 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Metodología Probada
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            El Proceso de Venta Paso a Paso
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Un camino estructurado, transparente y con comunicación constante para vender tu propiedad en Montevideo.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-4 hover:border-slate-300 hover:shadow-xs transition-all"
            >
              <div className="space-y-3.5">
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-slate-300 select-none">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {step.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Key takeaway */}
              <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-900 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                <span>{step.keyTakeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Call */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">Comenzá hoy con el Paso 01: Diagnóstico Sin Costo</h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Evaluamos tu inmueble y te entregamos un análisis de mercado en 24 a 48 horas.
            </p>
          </div>
          <a href="#tasacion" className="shrink-0 w-full sm:w-auto">
            <Button variant="primary" size="md" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Solicitar Tasación Ahora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
