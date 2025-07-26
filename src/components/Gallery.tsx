import React, { useState } from 'react';
import { GalleryImage } from '../types';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCaption, setSelectedCaption] = useState<string>('');

  const images: GalleryImage[] = [
    {
      id: '3',
      url: 'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.A_vuBlOdKSAvwmpAzdKIr9zXAvi3jAYqQHBQBTGn2fc_hhrtdj.jpg',
      alt: 'XYLA Portrait 3',
      caption: "When you're genuinely excited about helping someone but trying to play it cool"
    },
    {
      id: '4',
      url: 'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.nMU5wuYNbhqORgyawpr1l6uqLwmBkq4PjrsPxxxs1jA_mtfg96.jpg',
      alt: 'XYLA Portrait 4',
      caption: "Me when someone asks a question I actually know the answer to and I'm trying not to seem too eager"
    },
    {
      id: '5',
      url: 'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.wAsBbQeAPem7z-xE_afjvUoWlZVzUZf3LE3vSjlxQ8Q_yypejb.jpg',
      alt: 'XYLA Portrait 5',
      caption: "When you're bored but trying to look interested because you're a good friend"
    },
    {
      id: '6',
      url: 'https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.oXY5cY4KzQqH-cGUxKOOHACgy7AzUUnL_RKeeIKaIVo_ttrewa.jpg',
      alt: 'XYLA Portrait 6',
      caption: "That confused but cute expression when someone uses technical jargon and you're pretending to follow along"
    },
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dahnjs44h/image/upload/v1753541375/Atm%C3%B3sfera_terminal___Coalici%C3%B3n_por_el_Evangelio_wrfhmn.jpg)'
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-20 relative z-10">
          <div className="space-y-2 mb-8">
            <p className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              Visual Archive
            </p>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>
          <h2 className="text-5xl font-extralight text-black mb-6">
          </h2>
          <h2 className="text-5xl font-bold text-black mb-6" style={{ 
            fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
            letterSpacing: '2px'
          }}>
            Gallery
          </h2>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            Different perspectives, same personality.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative cursor-pointer"
              onClick={() => {
                setSelectedImage(image.url);
                setSelectedCaption(image.caption);
              }}
            >
              <div className="relative overflow-hidden border-2 border-gray-200 hover:border-black transition-colors duration-300 group">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Number overlay */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white border border-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10">
        {selectedImage && (
          <div
            className="fixed inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-50 p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="XYLA Gallery"
                className="max-w-full max-h-[70vh] object-contain border-4 border-black grayscale"
              />
              
              {/* Caption */}
              <div className="mt-6 text-center max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 font-light leading-relaxed">
                  {selectedCaption}
                </p>
              </div>
              
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-black text-white flex items-center justify-center text-xl font-light hover:bg-gray-800 transition-colors duration-200"
              >
                ×
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;