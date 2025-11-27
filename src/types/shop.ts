export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  inStock: boolean;
  colors?: string[];
}

export interface Order {
  id: string;
  date: string;
  status: 'delivered' | 'in-transit' | 'processing';
  total: number;
  items: Array<Product & { quantity: number }>;
}

export interface ReturnRequest {
  orderId: string;
  orderItemId: number;
  reason: string;
  pickupDate: string;
  pickupTime: string;
  qrCode: string;
}
