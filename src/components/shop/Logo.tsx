export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              fill="currentColor"
              fillOpacity="0.9"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl text-gray-900" style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
          TechHub
        </span>
        <span className="text-xs text-blue-600" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>
          SWISS
        </span>
      </div>
    </div>
  );
}
