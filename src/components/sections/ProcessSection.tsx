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
      icon: <Calculator className="w-6 h-6 text-emerald-400" />,
      title: 'Análisis y Tasación Real',
      subtitle: 'Diagnóstico en 24-48hs sin costo',
      description:
        'Visitamos tu inmueble, analizamos m², estado, gastos comunes y estudiamos operaciones reales cerradas en tu barrio para fijar el precio de salida óptimo.',
      keyTakeaway: 'Precio competitivo sustentado en datos reales.',
    },
    {
      number: '02',
      icon: <Camera className="w-6 h-6 text-emerald-400" />,
      title: 'Preparación y Marketing Digital',
      subtitle: 'Máximo impacto visual',
      description:
        'Producción fotográfica cuidada, redacción atractiva y publicación prioritaria en los portales líderes de Uruguay y en los canales de difusión de Inmobiliaria Imperium.',
      keyTakeaway: 'Destacado frente a la competencia.',
    },
    {
      number: '03',
      icon: <UserCheck className="w-6 h-6 text-emerald-400" />,
      title: 'Filtro y Visitas Calificadas',
      subtitle: 'Seguridad y tranquilidad',
      description:
        'Calificamos a los interesados antes de visitar tu hogar verificando su capacidad financiera e intención real de compra. Coordinamos visitas ordenadas con aviso previo.',
      keyTakeaway: 'Solo compradores reales en tu hogar.',
    },
    {
      number: '04',
      icon: <Award className="w-6 h-6 text-emerald-400" />,
      title: 'Negociación y Cierre Notarial',
      subtitle: 'Acompañamiento hasta la firma',
      description:
        'Defendemos las condiciones económicas de tu venta, gestionamos la reserva y coordinamos estrechamente con los escribanos de ambas partes hasta la escrituración.',
      keyTakeaway: 'Operación 100% segura y sin fricciones.',
    },
  ];

  return (
    <section id="proceso" className="scroll-mt-28 py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Metodología Probada
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            El Proceso de Venta Paso a Paso
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Un camino estructurado, transparente y con comunicación constante para vender tu propiedad en Montevideo sin complicaciones.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-between space-y-4 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-black/20"
            >
              <div className="space-y-4">
                {/* Step number badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-extrabold text-slate-700 select-none">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Key takeaway */}
              <div className="pt-3 border-t border-slate-800 flex items-start gap-2 text-xs text-emerald-300 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{step.keyTakeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Call */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-lg font-bold text-white">Comenzá hoy con el Paso 01: Diagnóstico Sin Costo</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Evaluamos tu propiedad y te entregamos una propuesta personalizada en menos de 48 horas.
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
