import React, { useState, useEffect } from 'react';

const RhinoplastySlideshow = () => {
  // تصاویر نمونه برای اسلایدشو (با تصاویر واقعی خود جایگزین کنید)
  const images = [
    "/api/placeholder/400/320",
    "/api/placeholder/400/320",
    "/api/placeholder/400/320",
    "/api/placeholder/400/320"
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // پیشرفت خودکار اسلایدشو
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [images.length]);
  
  // هدایت دستی
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  return (
    <div className="relative w-full h-full">
      {/* تصویر اصلی */}
      <div className="w-full h-full relative overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={src} 
              alt={`ترمیم بینی - تصویر ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* دکمه‌های ناوبری */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full shadow hover:bg-opacity-75 transition-all"
        aria-label="قبلی"
      >
        ◀
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 text-gray-800 p-2 rounded-full shadow hover:bg-opacity-75 transition-all"
        aria-label="بعدی"
      >
        ▶
      </button>
      
      {/* نشانگرها */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400 bg-opacity-50'
            }`}
            aria-label={`تصویر ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RhinoplastySlideshow;