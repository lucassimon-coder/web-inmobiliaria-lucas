import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  Mail,
  User,
  Phone,
  Sparkles,
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';
import { siteConfig } from '../../constants/siteConfig';

export function ValuationFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'apartamento',
    neighborhood: 'Pocitos',
    bedrooms: '2',
    objective: 'vender',
    details: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Por favor ingresá tu nombre completo.';
    if (!formData.phone.trim()) newErrors.phone = 'Por favor ingresá un teléfono o WhatsApp de contacto.';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresá un correo electrónico válido.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  // Compose dynamic WhatsApp message from form state
  const handleWhatsAppWithState = () => {
    const typeLabel = formData.propertyType || 'inmueble';
    const zoneLabel = formData.neighborhood || 'Montevideo';
    const message = `Hola Simon, te contacto desde tu web. Quiero solicitar una valoración/tasación para un ${typeLabel} en ${zoneLabel}. Mi nombre es ${formData.name || ''}.`;
    const cleanPhone = siteConfig.contact.phoneClean;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tasacion" className="scroll-mt-28 py-16 relative">
      {/* Anchor alias for #contacto */}
      <div id="contacto" className="scroll-mt-28 absolute -top-10" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="accent" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Tasación & Diagnóstico Profesional
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Querés saber el valor real de tu propiedad?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Completá los datos a continuación y coordinamos un estudio de mercado detallado sin costo ni compromiso contractual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Interactive Form */}
          <Card variant="elevated" className="lg:col-span-2 p-2 sm:p-4">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">
                Solicitud de Valoración Inmobiliaria
              </CardTitle>
              <CardDescription className="text-sm text-slate-300">
                Atención directa por Simon Mantuani &bull; Respaldo Inmobiliaria Imperium.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div className="p-8 sm:p-12 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">¡Solicitud Recibida con Éxito!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Muchas gracias, <strong className="text-emerald-300">{formData.name}</strong>. Simon Mantuani revisará los datos de tu propiedad en <strong className="text-white">{formData.neighborhood}</strong> y se comunicará en menos de 24 horas.
                    </p>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row justify-center gap-3">
                    <Button
                      variant="whatsapp"
                      size="md"
                      leftIcon={<MessageCircle className="w-4 h-4" />}
                      onClick={handleWhatsAppWithState}
                    >
                      Escribir también por WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          propertyType: 'apartamento',
                          neighborhood: 'Pocitos',
                          bedrooms: '2',
                          objective: 'vender',
                          details: '',
                        });
                      }}
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Nombre y Apellido *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      error={errors.name}
                      leftIcon={<User className="w-4 h-4" />}
                      required
                    />
                    <Input
                      label="Teléfono / WhatsApp *"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej. 099 123 456"
                      error={errors.phone}
                      leftIcon={<Phone className="w-4 h-4" />}
                      required
                    />
                  </div>

                  {/* Row 2: Email and Neighborhood */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Correo Electrónico"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com (opcional)"
                      error={errors.email}
                      leftIcon={<Mail className="w-4 h-4" />}
                    />
                    <Select
                      label="Barrio en Montevideo *"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleChange}
                      options={siteConfig.location.targetZones.map((zone) => ({
                        value: zone,
                        label: zone,
                      }))}
                      required
                    />
                  </div>

                  {/* Row 3: Property Type, Bedrooms, Objective */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Select
                      label="Tipo de Inmueble *"
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      options={[
                        { value: 'apartamento', label: 'Apartamento' },
                        { value: 'casa', label: 'Casa' },
                        { value: 'terreno', label: 'Terreno / Lote' },
                        { value: 'comercial', label: 'Local / Oficina' },
                        { value: 'chacra', label: 'Chacra / Campo' },
                        { value: 'otro', label: 'Otro' },
                      ]}
                      required
                    />
                    <Select
                      label="Dormitorios *"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleChange}
                      options={[
                        { value: 'monoambiente', label: 'Monoambiente' },
                        { value: '1', label: '1 Dormitorio' },
                        { value: '2', label: '2 Dormitorios' },
                        { value: '3', label: '3 Dormitorios' },
                        { value: '4+', label: '4 o más Dormitorios' },
                      ]}
                      required
                    />
                    <Select
                      label="Objetivo Principal *"
                      name="objective"
                      value={formData.objective}
                      onChange={handleChange}
                      options={[
                        { value: 'vender', label: 'Vender mi propiedad' },
                        { value: 'tasar', label: 'Tasación informativa' },
                        { value: 'alquilar', label: 'Poner en alquiler' },
                        { value: 'asesoramiento', label: 'Asesoramiento general' },
                      ]}
                      required
                    />
                  </div>

                  {/* Row 4: Details Textarea */}
                  <Textarea
                    label="Detalles o características de la propiedad"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Ej. Piso alto, luminoso, con balcón y garage en Pocitos. Estado a reciclar o actualizado..."
                    rows={3}
                    helperText="Cuanta más información brindes, más exacto será el pre-diagnóstico."
                  />

                  {/* Actions */}
                  <div className="pt-3 flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Solicitar Valoración Sin Costo
                    </Button>
                    <Button
                      type="button"
                      variant="whatsapp"
                      size="lg"
                      className="w-full sm:w-auto"
                      leftIcon={<MessageCircle className="w-5 h-5" />}
                      onClick={handleWhatsAppWithState}
                    >
                      Tasar directamente por WhatsApp
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Reassurance Sidebar */}
          <div className="space-y-6">
            <Card variant="bordered" className="p-6 space-y-6">
              <div className="space-y-1">
                <Badge variant="accent" size="sm">Garantía de Servicio</Badge>
                <h3 className="text-lg font-bold text-white">¿Por qué tasar conmigo?</h3>
              </div>

              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Respuesta en 24 a 48 hs</strong>
                    <span className="text-xs text-slate-400">Análisis técnico rápido para que tomes decisiones informadas.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">100% Gratuito y Confidencial</strong>
                    <span className="text-xs text-slate-400">Sin costos ocultos ni compromiso contractual forzoso.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block">Respaldo Inmobiliaria Imperium</strong>
                    <span className="text-xs text-slate-400">Datos consolidados de operaciones reales en Montevideo.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <p>📍 {siteConfig.location.display}</p>
                <p>✉️ {siteConfig.contact.email}</p>
                <p>📱 {siteConfig.contact.phoneDisplay}</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
