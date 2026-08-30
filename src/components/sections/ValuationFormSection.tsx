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
    nombre: '',
    telefono: '',
    email: '',
    barrio: 'Pocitos',
    tipo_inmueble: 'Apartamento',
    dormitorios: '2',
    objetivo: 'Vender mi propiedad',
    detalles: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'Por favor ingresá tu nombre completo.';
    if (!formData.telefono.trim()) newErrors.telefono = 'Por favor ingresá un teléfono o WhatsApp de contacto.';
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

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Netlify Forms POST Request
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'tasacion-inmueble',
          ...formData,
        }),
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch {
      setIsSubmitting(false);
      // Even if fetch fails offline, display success with direct WhatsApp fallback option
      setIsSubmitted(true);
    }
  };

  // Compose dynamic WhatsApp message from form state
  const handleWhatsAppWithState = () => {
    const typeLabel = formData.tipo_inmueble || 'inmueble';
    const zoneLabel = formData.barrio || 'Montevideo';
    const message = `Hola Simon, te contacto desde tu web. Quiero solicitar una tasación para un ${typeLabel} en ${zoneLabel}. Mi nombre es ${formData.nombre || ''}.`;
    const cleanPhone = siteConfig.contact.phoneClean;
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="tasacion" className="scroll-mt-24 py-12">
      {/* Anchor alias for #contacto */}
      <div id="contacto" className="scroll-mt-24 absolute -top-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex justify-center">
            <Badge variant="default" icon={<Sparkles className="w-3.5 h-3.5" />}>
              Tasación & Diagnóstico Profesional
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            ¿Querés saber el valor real de tu propiedad?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Completá los datos y coordinamos una tasación profesional sin costo ni compromiso contractual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Main Interactive Form with Netlify Forms integration */}
          <Card variant="elevated" className="lg:col-span-2 p-2 sm:p-4">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-slate-950">
                Solicitud de Valoración Inmobiliaria
              </CardTitle>
              <CardDescription className="text-sm text-slate-600">
                Atención directa por Simon Mantuani &bull; Respaldo Inmobiliaria Imperium.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {isSubmitted ? (
                <div className="p-8 sm:p-12 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-slate-950">¡Solicitud Recibida con Éxito!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Muchas gracias, <strong className="text-slate-900">{formData.nombre}</strong>. Simon Mantuani revisará los datos de tu propiedad en <strong className="text-slate-900">{formData.barrio}</strong> y se comunicará en menos de 24 horas.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
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
                          nombre: '',
                          telefono: '',
                          email: '',
                          barrio: 'Pocitos',
                          tipo_inmueble: 'Apartamento',
                          dormitorios: '2',
                          objetivo: 'Vender mi propiedad',
                          detalles: '',
                        });
                      }}
                    >
                      Enviar otra consulta
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  name="tasacion-inmueble"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {/* Hidden inputs required for Netlify Forms */}
                  <input type="hidden" name="form-name" value="tasacion-inmueble" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>

                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Nombre y Apellido *"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      error={errors.nombre}
                      leftIcon={<User className="w-4 h-4" />}
                      required
                    />
                    <Input
                      label="Teléfono / WhatsApp *"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej. 099 123 456"
                      error={errors.telefono}
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
                      name="barrio"
                      value={formData.barrio}
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
                      name="tipo_inmueble"
                      value={formData.tipo_inmueble}
                      onChange={handleChange}
                      options={[
                        { value: 'Apartamento', label: 'Apartamento' },
                        { value: 'Casa', label: 'Casa' },
                        { value: 'Terreno', label: 'Terreno / Lote' },
                        { value: 'Comercial', label: 'Local / Oficina' },
                        { value: 'Chacra', label: 'Chacra / Campo' },
                        { value: 'Otro', label: 'Otro' },
                      ]}
                      required
                    />
                    <Select
                      label="Dormitorios *"
                      name="dormitorios"
                      value={formData.dormitorios}
                      onChange={handleChange}
                      options={[
                        { value: 'Monoambiente', label: 'Monoambiente' },
                        { value: '1', label: '1 Dormitorio' },
                        { value: '2', label: '2 Dormitorios' },
                        { value: '3', label: '3 Dormitorios' },
                        { value: '4+', label: '4 o más Dormitorios' },
                      ]}
                      required
                    />
                    <Select
                      label="Objetivo *"
                      name="objetivo"
                      value={formData.objetivo}
                      onChange={handleChange}
                      options={[
                        { value: 'Vender mi propiedad', label: 'Vender mi propiedad' },
                        { value: 'Tasación informativa', label: 'Tasación informativa' },
                        { value: 'Poner en alquiler', label: 'Poner en alquiler' },
                        { value: 'Asesoramiento general', label: 'Asesoramiento general' },
                      ]}
                      required
                    />
                  </div>

                  {/* Row 4: Details Textarea */}
                  <Textarea
                    label="Detalles o características de la propiedad"
                    name="detalles"
                    value={formData.detalles}
                    onChange={handleChange}
                    placeholder="Ej. Piso alto, con balcón y garage en Pocitos. Estado general..."
                    rows={3}
                    helperText="Cuanta más información brindes, más exacto será el pre-diagnóstico."
                  />

                  {submitError && (
                    <p className="text-xs text-rose-600 font-medium">{submitError}</p>
                  )}

                  {/* Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      isLoading={isSubmitting}
                      rightIcon={<Send className="w-4 h-4" />}
                    >
                      Solicitar Tasación Sin Costo
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
            <Card variant="bordered" className="p-6 space-y-5">
              <div className="space-y-1">
                <Badge variant="default" size="sm">Garantía de Servicio</Badge>
                <h3 className="text-lg font-bold text-slate-900">¿Por qué tasar conmigo?</h3>
              </div>

              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Respuesta en 24 a 48 hs</strong>
                    <span className="text-xs text-slate-600">Análisis técnico para tomar decisiones con certeza.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">100% Gratuito y Confidencial</strong>
                    <span className="text-xs text-slate-600">Sin costos ni compromisos iniciales.</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-slate-100 text-slate-900 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-semibold">Respaldo Inmobiliaria Imperium</strong>
                    <span className="text-xs text-slate-600">Datos consolidados de operaciones reales en Montevideo.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-4 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
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
