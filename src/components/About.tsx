import React from 'react';

const About: React.FC = () => {
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
      
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-20 relative z-10">
          <div className="space-y-2 mb-8">
            <p className="text-sm font-medium text-gray-500 tracking-widest uppercase">
              Background
            </p>
            <div className="w-12 h-px bg-black mx-auto"></div>
          </div>
          <h2 className="text-5xl font-extralight text-black mb-6">
          </h2>
          <h2 className="text-5xl font-bold text-black mb-6" style={{ 
            fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
            letterSpacing: '2px'
          }}>
            About XYLA
          </h2>
          <p className="text-xl text-gray-700 font-light">
            The story behind your cute and helpful AI companion
          </p>
        </div>

        <div className="space-y-20 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                <span className="text-sm font-bold">01</span>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black" style={{ 
                  fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
                  letterSpacing: '1px'
                }}>
                  The Problem
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Most AI assistants are boring, formal, and lack any real personality. 
                  They're overly polite, weirdly corporate, and about as charming as a tax document. 
                  We wanted something different - something cute and genuinely helpful.
                </p>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.EzGHDcd8yUBk5FpN-2r5UIRFEubM2TSNVljhXiXS2gM_a1hcmi.jpg"
                  alt="XYLA Portrait"
                  className="w-full h-64 object-cover border-2 border-gray-200 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                <span className="text-sm font-bold">02</span>
              </div>
            </div>
            <div className="md:col-span-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black" style={{ 
                  fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
                  letterSpacing: '1px'
                }}>
                  The Solution
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light mb-8">
                  XYLA talks like a real person with genuine charm. She remembers context, has a cute personality, 
                  and helps without sounding like she's reading from a script.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Cute and natural conversation style',
                    'Contextual memory that actually works',
                    'Real automation integration',
                    'Humor that doesn\'t make you cringe',
                    'Genuinely helpful and charming responses'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-1 h-1 bg-black rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dahnjs44h/image/upload/v1753540023/att.sJKt16K5bQD4Huc4lMZf_7f1ZRkrTiSn6Uq5pUgNBWI_ztmutc.jpg"
                  alt="XYLA Portrait"
                  className="w-full h-64 object-cover border-2 border-gray-200 grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                <span className="text-sm font-bold">03</span>
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black" style={{ 
                  fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
                  letterSpacing: '1px'
                }}>
                  The Technology
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Built on Grok's language models with custom personality training focused on being cute and helpful. 
                  The integration system connects with real automation tools, so XYLA isn't just 
                  a chatbot—she's actually useful for getting things done with charm and personality.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="w-12 h-12 border-2 border-black flex items-center justify-center">
                <span className="text-sm font-bold">04</span>
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black" style={{ 
                  fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif',
                  letterSpacing: '1px'
                }}>
                  Open Source
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg font-light">
                  Everything is open source because we believe cute and helpful AI should be accessible. 
                  No black boxes, no vendor lock-in, just transparent technology that works.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;