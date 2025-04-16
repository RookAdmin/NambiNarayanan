import { useState } from 'react';
import { galleryData } from '@/data/galleryData';
import ImageModal from './ui/image-modal';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption: string;
  } | null>(null);

  const openModal = (image: typeof selectedImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">Gallery</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Visual journey through the life and career of Nambi Narayanan.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item cursor-pointer overflow-hidden rounded-lg shadow-md card-hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal({
                src: item.imageUrl,
                alt: item.alt,
                caption: item.caption
              })}
            >
              <div className="overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.alt} 
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110" 
                />
              </div>
              <div className="p-4 bg-white">
                <p className="font-semibold transition-colors duration-300 hover:text-[#FF9933]">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          src={selectedImage.src}
          alt={selectedImage.alt}
          caption={selectedImage.caption}
          onClose={closeModal}
        />
      )}
    </section>
  );
}
