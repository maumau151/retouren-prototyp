import { Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Explore() {
  const categories = ['All', 'Travel', 'Food', 'Design', 'Nature', 'Fashion', 'Architecture'];
  
  const images = [
    'travel adventure',
    'food photography',
    'modern design',
    'nature landscape',
    'fashion style',
    'architecture',
    'city skyline',
    'healthy food',
    'interior design'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="px-4 py-3">
          <h2 className="text-gray-900 mb-3">Explore</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500"
            />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="border-b border-gray-200">
        <div className="flex gap-3 px-4 py-3 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                category === 'All'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {images.map((image, index) => (
          <div key={index} className="aspect-square bg-gray-200">
            <ImageWithFallback
              src={`https://source.unsplash.com/featured/400x400/?${encodeURIComponent(image)}`}
              alt={image}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
