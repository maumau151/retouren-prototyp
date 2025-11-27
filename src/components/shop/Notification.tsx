import { X, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NotificationProps {
  title: string;
  message: string;
  onClose: () => void;
}

export function Notification({ title, message, onClose }: NotificationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate in
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed top-4 left-4 right-4 z-50 max-w-md mx-auto transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 flex items-start gap-3">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Check className="w-5 h-5 text-green-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-600">{message}</p>
        </div>
        <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 flex-shrink-0">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
