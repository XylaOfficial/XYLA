import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.A_vuBlOdKSAvwmpAzdKIr9zXAvi3jAYqQHBQBTGn2fc_hhrtdj.jpg',
    'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.nMU5wuYNbhqORgyawpr1l6uqLwmBkq4PjrsPxxxs1jA_mtfg96.jpg',
    'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.wAsBbQeAPem7z-xE_afjvUoWlZVzUZf3LE3vSjlxQ8Q_yypejb.jpg',
    'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.oXY5cY4KzQqH-cGUxKOOHACgy7AzUUnL_RKeeIKaIVo_ttrewa.jpg',
    'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.EzGHDcd8yUBk5FpN-2r5UIRFEubM2TSNVljhXiXS2gM_a1hcmi.jpg',
    'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.sJKt16K5bQD4Huc4lMZf_7f1ZRkrTiSn6Uq5pUgNBWI_ztmutc.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen py-8 relative overflow-hidden group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dahnjs44h/image/upload/v1753541375/Atm%C3%B3sfera_terminal___Coalici%C3%B3n_por_el_Evangelio_wrfhmn.jpg)'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col items-center justify-center min-h-[80vh] relative z-10 text-center">
          {/* Title */}
          <div className="space-y-8 mb-12">
            <div className="space-y-4">
              <h1 className="text-7xl lg:text-8xl font-bold leading-none tracking-wide" style={{ 
                fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif'
              }}>
                Meet
              </h1>
              <h1 className="text-7xl lg:text-8xl font-bold leading-none tracking-wide" style={{ 
                fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif'
              }}>
                XYLA
              </h1>
            </div>
          </div>
          
          {/* Main Profile Image with rotating gallery */}
          <div className="mb-12">
            <div className="relative">
              <div className="w-80 h-80 border-4 border-black overflow-hidden">
                <img
                  src={images[currentImageIndex]}
                  alt="XYLA"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Minimal corner accents */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-black"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-black"></div>
              
              {/* Image counter */}
              <div className="absolute bottom-4 right-4 bg-white border border-black px-2 py-1">
                <span className="text-xs font-bold">{String(currentImageIndex + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-8 max-w-lg mb-12">
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              Your cute and helpful AI companion. I talk like a human, think like a friend, 
              and help with genuine charm and personality.
            </p>
          </div>
          
          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://x.com/Xylafun"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black text-white text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200"
            >
              Follow on X
            </a>
            
            <a
              href="https://github.com/XylaOfficial/XYLA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-black text-black text-sm font-medium tracking-wide hover:bg-black hover:text-white transition-colors duration-200"
            >
              View Code
            </a>
          </div>

          {/* Image thumbnails for manual navigation */}
          <div className="flex space-x-2 mt-8">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 border border-black transition-colors duration-200 ${
                  currentImageIndex === index ? 'bg-black' : 'bg-white hover:bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;