import { Order } from '../types/shop';
import { products } from './products';

export const orders: Order[] = [
  {
    id: 'ORD-2024-1234',
    date: '2024-11-20',
    status: 'delivered',
    total: 1478,
    items: [
      { ...products[0], quantity: 1 },
      { ...products[4], quantity: 1 }
    ]
  },
  {
    id: 'ORD-2024-1189',
    date: '2024-11-10',
    status: 'delivered',
    total: 1299,
    items: [
      { ...products[2], quantity: 1 }
    ]
  },
  {
    id: 'ORD-2024-1156',
    date: '2024-10-28',
    status: 'delivered',
    total: 848,
    items: [
      { ...products[5], quantity: 1 },
      { ...products[7], quantity: 1 }
    ]
  }
];
