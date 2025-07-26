import React, { useRef, useState } from 'react';

const Demo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="space-y-2 mb-8">
            <p className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              Demonstration
            </p>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>
          <h2 className="text-5xl font-extralight text-black mb-6">
          </h2>
          <h2 className="text-5xl font-bold text-black mb-6" style={{ 
            fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
            letterSpacing: '2px'
          }}>
            In Action
          </h2>
          <p className="text-xl text-gray-700 font-light max-w-2xl mx-auto">
            See how XYLA actually works. Cute, helpful, and genuine.
          </p>
        </div>

        <div className="bg-white border border-gray-200">
          {/* Header */}
          <div className="border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500 tracking-wide">
                Live Demo
              </span>
              <div className="flex items-center space-x-6">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                  <span className="text-xs font-medium text-gray-500">REC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <video
              ref={videoRef}
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://res.cloudinary.com/dahnjs44h/video/upload/v1753542908/xyla-recording_r8wj91.mp4"
                type="video/mp4"
              />
              Your browser doesn't support video playback.
            </video>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm text-gray-700">Real Integration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm text-gray-700">Real Conversations</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm text-gray-700">Real Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;