export type PropertyType = 
  | 'house'         // Casa
  | 'apartment'     // Departamento
  | 'land'          // Terreno / Lote
  | 'commercial'    // Local comercial / Oficina
  | 'farm';         // Chacra / Campo

export type PropertyOperation = 
  | 'sale'          // Venta
  | 'rent'          // Alquiler
  | 'temporary';    // Alquiler temporal

export type PropertyStatus = 
  | 'available'     // Disponible
  | 'reserved'      // Reservado
  | 'sold'          // Vendido
  | 'rented';       // Alquilado

export type Currency = 'USD' | 'UYU';

export interface PropertyLocation {
  city: string;
  neighborhood: string;
  address?: string;
  zone?: string;
  googleMapsUrl?: string;
}

export interface PropertySpecs {
  totalArea: number;       // m² totales
  builtArea?: number;      // m² construidos
  bedrooms: number;        // Dormitorios
  bathrooms: number;       // Baños
  garages: number;         // Cocheras
  yearBuilt?: number;      // Año de construcción
  expenses?: number;       // Gastos comunes / Expensas
}

export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  type: PropertyType;
  operation: PropertyOperation;
  status: PropertyStatus;
  price: number;
  currency: Currency;
  location: PropertyLocation;
  specs: PropertySpecs;
  featuredImage: string;
  gallery: string[];
  features: string[];       // Ej: ['Piscina', 'Parrillero', 'Seguridad 24hs', 'Vista al mar']
  isFeatured: boolean;     // Destacada en la sección principal
  createdAt: string;
  updatedAt?: string;
}

export interface PropertyFilters {
  operation?: PropertyOperation | 'all';
  type?: PropertyType | 'all';
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number | 'all';
}
