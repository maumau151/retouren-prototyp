import { Bell, Search } from 'lucide-react';
import { StoryList } from './StoryList';
import { FeedCard } from './FeedCard';

export function Home() {
  const feedItems = [
    {
      id: 1,
      username: 'alex_wanderer',
      timeAgo: '2h',
      image: 'nature landscape',
      likes: 1234,
      caption: 'Beautiful morning at the mountains 🏔️'
    },
    {
      id: 2,
      username: 'design_daily',
      timeAgo: '4h',
      image: 'modern workspace',
      likes: 892,
      caption: 'Clean workspace inspiration for Monday vibes'
    },
    {
      id: 3,
      username: 'food_stories',
      timeAgo: '6h',
      image: 'fresh coffee',
      likes: 2156,
      caption: 'Perfect way to start the day ☕'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <h1 className="text-blue-600">MobileApp</h1>
          <div className="flex items-center gap-4">
            <button className="text-gray-700">
              <Search className="w-6 h-6" />
            </button>
            <button className="text-gray-700 relative">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Stories */}
      <StoryList />

      {/* Feed */}
      <div className="pb-4">
        {feedItems.map((item) => (
          <FeedCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
