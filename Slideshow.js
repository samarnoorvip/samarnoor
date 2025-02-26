import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const RhinoplastySlideshow = () => {
  // تصاویر نمونه برای اسلایدشو (با تصاویر واقعی خود جایگزین کنید)
  const images = [
    "https://i.ibb.co/6Rjnwcp9/best-hotel-shrine-Imam-Reza.jpg",
    "https://i.ibb.co/yFzmsGyq/780x470.jpg",
    "https://i.ibb.co/cKTxpTwz/14-1-1.jpg",
    "https://i.ibb.co/7xTq3hzY/min.jpg"
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
    <div className="slideshow-container">
      {/* تصویر اصلی */}
      <div className="slideshow-images">
        {images.map((src, index) => (
          <div 
            key={index} 
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img 
              src={src} 
              alt={`ترمیم بینی - تصویر ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
      {/* دکمه‌های ناوبری */}
      <button 
        onClick={goToPrevious}
        className="nav-button prev"
        aria-label="قبلی"
      >
        ◀
      </button>
      
      <button 
        onClick={goToNext}
        className="nav-button next"
        aria-label="بعدی"
      >
        ▶
      </button>
      
      {/* نشانگرها */}
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            aria-label={`تصویر ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// رندر کردن کامپوننت در صفحه
ReactDOM.render(
  <RhinoplastySlideshow />,
  document.getElementById('rhinoplasty-slideshow')
);