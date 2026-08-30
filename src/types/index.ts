export * from './property';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
  operationType: 'Comprador' | 'Vendedor' | 'Inversor' | 'Arrendatario';
  date: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  ctaText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: 'comprar' | 'vender' | 'alquilar' | 'tasar' | 'asesoramiento';
  message: string;
  propertyId?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
