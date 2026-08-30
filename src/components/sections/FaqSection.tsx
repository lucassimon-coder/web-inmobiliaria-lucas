import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { siteConfig } from '../../constants/siteConfig';
import { cn } from '../../utils/cn';

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs: FaqItem[] = [
    {
      question: '¿La tasación o valoración de mi propiedad tiene algún costo?',
      answer:
        'No, la tasación y el análisis comparativo de mercado (ACM) son 100% gratuitos y sin ningún compromiso contractual. El objetivo es que conozcas el valor real de mercado de tu inmueble en Montevideo para tomar la mejor decisión.',
    },
    {
      question: '¿Por qué vender con un asesor dedicado en vez de publicarlo por mi cuenta?',
      answer:
        'Vender de forma particular expone la seguridad de tu hogar, consume tiempo en llamadas de curiosos y suele fijar precios emocionales que estancan la propiedad. Conmigo contás con filtrado previo de compradores, producción profesional, difusión estratégica, defensa del precio y coordinación notarial hasta el cierre.',
    },
    {
      question: '¿Qué ventajas obtengo con el respaldo de Inmobiliaria Imperium?',
      answer:
        'Disfrutás de lo mejor de dos mundos: la cercanía y dedicación 1 a 1 de Simon Mantuani como tu agente personal, respaldado por la infraestructura, la red de compradores y la solidez de Inmobiliaria Imperium.',
    },
    {
      question: '¿Qué documentación necesito para comenzar a comercializar mi propiedad?',
      answer:
        'Para iniciar el proceso requerimos copia simple del título de propiedad o antecedente notarial, plano de mensura y los últimos recibos de contribución inmobiliaria y gastos comunes al día. Te asesoramos paso a paso en caso de requerir gestiones notariales previas.',
    },
    {
      question: '¿Cuánto tiempo suele demorar la venta de una propiedad en Montevideo?',
      answer:
        'El plazo varía según la zona y tipología, pero una propiedad con precio óptimo de mercado y plan de difusión activo suele concentrar el mayor flujo de interesados calificados durante los primeros 45 a 60 días.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faqs" className="scroll-mt-24 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Resolvemos tus Dudas
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Respuestas claras a las consultas más habituales antes de vender o tasar tu inmueble en Montevideo.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  'rounded-2xl border transition-all duration-200 overflow-hidden',
                  isOpen
                    ? 'bg-white border-slate-300 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 rounded-2xl select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-3">
                    <HelpCircle className={cn('w-5 h-5 shrink-0 transition-colors', isOpen ? 'text-slate-900' : 'text-slate-400')} />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={cn(
                      'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200',
                      isOpen
                        ? 'bg-slate-100 text-slate-900 rotate-180'
                        : 'bg-slate-50 text-slate-500'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p className="pl-8">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom support prompt */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-3">
          <p className="text-sm text-slate-700">
            ¿Tenés alguna otra duda sobre tu caso particular?
          </p>
          <div className="flex justify-center">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="md" leftIcon={<MessageCircle className="w-4 h-4" />}>
                Consultar a Simon por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
