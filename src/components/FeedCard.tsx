import { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { unsplash_tool } from 'unsplash_tool';

interface FeedCardProps {
  username: string;
  timeAgo: string;
  image: string;
  likes: number;
  caption: string;
}

export function FeedCard({ username, timeAgo, image, likes, caption }: FeedCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <article className="bg-white border-b border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
          <div>
            <p className="text-gray-900">{username}</p>
            <p className="text-xs text-gray-500">{timeAgo}</p>
          </div>
        </div>
        <button className="text-gray-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="w-full aspect-square bg-gray-200">
        <ImageWithFallback
          src={`https://source.unsplash.com/featured/800x800/?${encodeURIComponent(image)}`}
          alt={caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`transition-colors ${isLiked ? 'text-red-500' : 'text-gray-700'}`}
            >
              <Heart className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button className="text-gray-700">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="text-gray-700">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`transition-colors ${isSaved ? 'text-gray-900' : 'text-gray-700'}`}
          >
            <Bookmark className="w-6 h-6" fill={isSaved ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Likes */}
        <p className="text-gray-900 mb-2">{(isLiked ? likes + 1 : likes).toLocaleString()} likes</p>

        {/* Caption */}
        <p className="text-gray-900">
          <span className="mr-2">{username}</span>
          <span className="text-gray-700">{caption}</span>
        </p>
      </div>
    </article>
  );
}
