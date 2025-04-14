import { useEffect } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  src: string;
  alt: string;
  caption: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, src, alt, caption, onClose }: ImageModalProps) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={(e) => {
        // Close when clicking outside the image
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button 
        className="absolute top-4 right-4 text-white text-3xl hover:text-[#FF9933] z-10"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-h-[90vh] max-w-[90vw] object-contain" 
      />
      <p className="absolute bottom-8 text-white text-center w-full text-lg bg-black bg-opacity-50 py-2">
        {caption}
      </p>
    </div>
  );
}
