export function StoryList() {
  const stories = [
    { id: 1, username: 'Your Story', isOwn: true },
    { id: 2, username: 'emma_j' },
    { id: 3, username: 'mike_p' },
    { id: 4, username: 'sara_k' },
    { id: 5, username: 'john_d' },
    { id: 6, username: 'lisa_m' }
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex gap-4 px-4 py-3 overflow-x-auto scrollbar-hide">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-1 flex-shrink-0">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${
                story.isOwn
                  ? 'bg-gray-200'
                  : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-0.5'
              }`}
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gray-300"></div>
              </div>
            </div>
            <span className="text-xs text-gray-600 max-w-[64px] truncate">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
