import { Navbar, Footer, FloatingWhatsAppCTA } from './components/layout';
import {
  HeroSection,
  AgencyBackingSection,
  ServicesSection,
  WhyChooseMeSection,
  ProcessSection,
  ValuationFormSection,
  FaqSection,
} from './components/sections';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300 relative flex flex-col">
      {/* Global Navigation Header */}
      <Navbar />

      {/* Structured Landing Page Flow */}
      <main className="flex-1 space-y-16 sm:space-y-24">
        {/* 1. Hero (#inicio) */}
        <HeroSection />

        {/* 2. Respaldo Inmobiliaria Imperium (#respaldo) */}
        <AgencyBackingSection />

        {/* 3. Servicios para Propietarios (#servicios) */}
        <ServicesSection />

        {/* 4. Por Qué Elegirme / Diferenciales (#por-que-elegirme) */}
        <WhyChooseMeSection />

        {/* 5. Proceso Paso a Paso (#proceso) */}
        <ProcessSection />

        {/* 6. Formulario de Tasación y Captación (#tasacion / #contacto) */}
        <ValuationFormSection />

        {/* 7. Preguntas Frecuentes (#faqs) */}
        <FaqSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp CTA */}
      <FloatingWhatsAppCTA />
    </div>
  );
}
