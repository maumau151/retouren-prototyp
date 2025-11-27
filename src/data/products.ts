import { Product } from '../types/shop';

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1743677221330-9886caa74fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjBzbWFydHBob25lfGVufDF8fHx8MTc2NDA1NzgxNHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Smartphones',
    brand: 'Apple',
    rating: 4.8,
    reviews: 342,
    description: 'Das iPhone 15 Pro mit A17 Pro Chip, Titanium-Design und ProMotion Display.',
    features: [
      '6.1" Super Retina XDR Display',
      'A17 Pro Chip',
      'Pro Kamera-System',
      '128GB Speicher',
      '5G kompatibel'
    ],
    inStock: true,
    colors: ['Titan Schwarz', 'Titan Weiß', 'Titan Blau', 'Titan Natur']
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1627609834360-74948f361335?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwZ2FsYXh5JTIwc21hcnRwaG9uZXxlbnwxfHx8fDE3NjQwOTI4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Smartphones',
    brand: 'Samsung',
    rating: 4.7,
    reviews: 256,
    description: 'Samsung Galaxy S24 Ultra mit KI-Features und S Pen.',
    features: [
      '6.8" Dynamic AMOLED Display',
      'Snapdragon 8 Gen 3',
      '200MP Hauptkamera',
      '256GB Speicher',
      'S Pen inklusive'
    ],
    inStock: true,
    colors: ['Phantom Black', 'Titanium Gray', 'Violet']
  },
  {
    id: 3,
    name: 'MacBook Air M3',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1675668409245-955188b96bf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNib29rJTIwbGFwdG9wfGVufDF8fHx8MTc2NDEzODA0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Laptops',
    brand: 'Apple',
    rating: 4.9,
    reviews: 189,
    description: 'Das neue MacBook Air mit M3 Chip - unglaublich leistungsstark und portabel.',
    features: [
      '13.6" Liquid Retina Display',
      'Apple M3 Chip',
      '8GB RAM, 256GB SSD',
      'Bis zu 18 Std. Batterielaufzeit',
      'MagSafe 3'
    ],
    inStock: true,
    colors: ['Space Grau', 'Silber', 'Mitternacht', 'Polarstern']
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1607363775624-81f3f279d9ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGFkJTIwdGFibGV0fGVufDF8fHx8MTc2NDA0ODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Tablets',
    brand: 'Apple',
    rating: 4.8,
    reviews: 167,
    description: 'iPad Pro mit M2 Chip und brillantem Liquid Retina XDR Display.',
    features: [
      '12.9" Liquid Retina XDR',
      'Apple M2 Chip',
      '128GB Speicher',
      'ProMotion Technologie',
      'Face ID'
    ],
    inStock: true,
    colors: ['Space Grau', 'Silber']
  },
  {
    id: 5,
    name: 'AirPods Pro (2. Gen)',
    price: 279,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1695634463848-4db4e47703a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb2RzJTIwZWFyYnVkc3xlbnwxfHx8fDE3NjQxNTgzMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    brand: 'Apple',
    rating: 4.7,
    reviews: 421,
    description: 'AirPods Pro mit aktiver Geräuschunterdrückung der nächsten Generation.',
    features: [
      'Aktive Geräuschunterdrückung',
      'Adaptiver Transparenzmodus',
      'Personalisiertes 3D Audio',
      'Bis zu 6 Std. Wiedergabe',
      'MagSafe Ladecase'
    ],
    inStock: true
  },
  {
    id: 6,
    name: 'Sony WH-1000XM5',
    price: 399,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb255JTIwaGVhZHBob25lc3xlbnwxfHx8fDE3NjQxNjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    brand: 'Sony',
    rating: 4.9,
    reviews: 312,
    description: 'Premium Kopfhörer mit branchenführender Geräuschunterdrückung.',
    features: [
      'Beste Noise Cancelling',
      '30 Std. Akkulaufzeit',
      'Multipoint Connection',
      'Premium Sound Qualität',
      'Schnellladefunktion'
    ],
    inStock: true,
    colors: ['Schwarz', 'Silber']
  },
  {
    id: 7,
    name: 'Apple Watch Series 9',
    price: 449,
    image: 'https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMHdhdGNofGVufDF8fHx8MTc2NDE1OTM3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Wearables',
    brand: 'Apple',
    rating: 4.8,
    reviews: 278,
    description: 'Die fortschrittlichste Apple Watch mit hellstem Display.',
    features: [
      'Always-On Retina Display',
      'S9 SiP Chip',
      'Doppeltipp Geste',
      'Blutsauerstoff & EKG',
      'Wasserdicht bis 50m'
    ],
    inStock: true,
    colors: ['Mitternacht', 'Polarstern', 'Silber', 'Product Red']
  },
  {
    id: 8,
    name: 'Samsung Galaxy Buds2 Pro',
    price: 199,
    originalPrice: 229,
    image: 'https://images.unsplash.com/photo-1618213520536-ce37aabcd9e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1zdW5nJTIwZ2FsYXh5JTIwYnVkc3xlbnwxfHx8fDE3NjQxNTc1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Audio',
    brand: 'Samsung',
    rating: 4.6,
    reviews: 193,
    description: 'True Wireless Earbuds mit intelligentem ANC.',
    features: [
      'Intelligentes ANC',
      '360 Audio',
      'HD Voice-Anrufe',
      '5 Std. Wiedergabe',
      'IPX7 wasserdicht'
    ],
    inStock: true,
    colors: ['Graphite', 'White', 'Bora Purple']
  }
];