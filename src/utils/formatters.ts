import { Currency, PropertyOperation, PropertyStatus, PropertyType } from '../types/property';

/**
 * Formats a numeric price into a currency string (e.g. "USD 350.000" or "$ 45.000").
 */
export function formatPrice(price: number, currency: Currency = 'USD'): string {
  const formatted = new Intl.NumberFormat('es-UY', {
    maximumFractionDigits: 0,
  }).format(price);

  if (currency === 'USD') {
    return `USD ${formatted}`;
  }
  return `$ ${formatted}`;
}

/**
 * Formats surface area in square meters.
 */
export function formatArea(area: number): string {
  return `${area.toLocaleString('es-UY')} m²`;
}

/**
 * Human-readable label for property operations.
 */
export function getOperationLabel(operation: PropertyOperation): string {
  switch (operation) {
    case 'sale':
      return 'Venta';
    case 'rent':
      return 'Alquiler';
    case 'temporary':
      return 'Alquiler Temporal';
    default:
      return operation;
  }
}

/**
 * Human-readable label for property types.
 */
export function getPropertyTypeLabel(type: PropertyType): string {
  switch (type) {
    case 'house':
      return 'Casa';
    case 'apartment':
      return 'Apartamento';
    case 'land':
      return 'Terreno / Lote';
    case 'commercial':
      return 'Comercial / Oficina';
    case 'farm':
      return 'Chacra / Campo';
    default:
      return type;
  }
}

/**
 * Human-readable label and color style for property status.
 */
export function getStatusBadge(status: PropertyStatus): { label: string; variant: 'success' | 'warning' | 'muted' | 'danger' } {
  switch (status) {
    case 'available':
      return { label: 'Disponible', variant: 'success' };
    case 'reserved':
      return { label: 'Reservado', variant: 'warning' };
    case 'sold':
      return { label: 'Vendido', variant: 'danger' };
    case 'rented':
      return { label: 'Alquilado', variant: 'muted' };
    default:
      return { label: status, variant: 'muted' };
  }
}

/**
 * Generates a clean URL slug from any string.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-')           // replace spaces with -
    .replace(/[^\w-]+/g, '')        // remove all non-word chars
    .replace(/--+/g, '-');          // replace multiple - with single -
}

/**
 * Generates a WhatsApp direct message URL with predefined encoded text.
 */
export function getWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
