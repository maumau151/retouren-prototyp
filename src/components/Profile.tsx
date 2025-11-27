import { Settings, Grid, Bookmark } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Profile() {
  const [activeTab, setActiveTab] = useState<'posts' | 'saved'>('posts');

  const posts = [
    'portrait photography',
    'landscape nature',
    'urban architecture',
    'food styling',
    'travel destination',
    'minimal design'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <h2 className="text-gray-900">Profile</h2>
          <button className="text-gray-700">
            <Settings className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Profile Info */}
      <div className="px-4 py-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          
          <div className="flex-1 flex justify-around">
            <div className="text-center">
              <p className="text-gray-900">42</p>
              <p className="text-gray-600">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-gray-900">1.2K</p>
              <p className="text-gray-600">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-gray-900">856</p>
              <p className="text-gray-600">Following</p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-gray-900 mb-1">Alex Johnson</h3>
          <p className="text-gray-600">Digital creator & photographer</p>
          <p className="text-gray-600 mt-2">📍 San Francisco, CA</p>
        </div>

        <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
          Edit Profile
        </button>
      </div>

      {/* Tabs */}
      <div className="border-t border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 border-t-2 transition-colors ${
              activeTab === 'posts'
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-400'
            }`}
          >
            <Grid className="w-5 h-5" />
            <span>Posts</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 border-t-2 transition-colors ${
              activeTab === 'saved'
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-400'
            }`}
          >
            <Bookmark className="w-5 h-5" />
            <span>Saved</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {activeTab === 'posts' && posts.map((post, index) => (
          <div key={index} className="aspect-square bg-gray-200">
            <ImageWithFallback
              src={`https://source.unsplash.com/featured/400x400/?${encodeURIComponent(post)}`}
              alt={post}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {activeTab === 'saved' && (
          <div className="col-span-3 flex flex-col items-center justify-center py-12">
            <Bookmark className="w-12 h-12 text-gray-300 mb-2" />
            <p className="text-gray-500">No saved posts yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
