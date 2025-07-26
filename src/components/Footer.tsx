import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">X</span>
                </div>
                <span className="text-3xl font-bold tracking-wide" style={{ 
                  fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
                  letterSpacing: '2px'
                }}>XYLA</span>
              </div>
              <div className="w-16 h-px bg-black mb-6"></div>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg font-light max-w-md">
              Your cute and helpful AI companion that talks like a human, thinks like a friend, and helps with genuine charm.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-8">
              Connect
            </h4>
            <div className="space-y-4">
              <a
                href="https://x.com/Xylafun"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-black transition-colors font-light"
              >
                X / Twitter
              </a>
              <a
                href="https://github.com/XylaOfficial/XYLA"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 hover:text-black transition-colors font-light"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-medium text-gray-500 tracking-widest uppercase mb-8">
              Project
            </h4>
            <p className="text-gray-600 font-light leading-relaxed">
              Open source AI that's cute and helpful. Built for humans who want technology with personality.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm font-medium text-gray-500 tracking-wide">
              XYLA PROJECT © 2025
            </p>
            <p className="text-sm font-light text-gray-500">
              Made by humans who believe AI should be cute, helpful, and charming
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;