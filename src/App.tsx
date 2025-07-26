import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Chat from './components/Chat';
import Gallery from './components/Gallery';
import Demo from './components/Demo';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <Demo />
          </>
        );
      case 'chat':
        return <Chat />;
      case 'gallery':
        return <Gallery />;
      case 'about':
        return <About />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;