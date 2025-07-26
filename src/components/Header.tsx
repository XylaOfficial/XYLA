import React from 'react';
import { Heart } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'chat', label: 'Chat' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
  ];

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-black text-black">
            <span style={{ 
              fontFamily: 'Brush Script MT, cursive, fantasy, sans-serif', 
              fontWeight: 'bold',
              letterSpacing: '2px',
              textTransform: 'none',
              textShadow: '2px 2px 0px rgba(0,0,0,0.1)'
            }}>
              Xyla Grok Companion
            </span>
          </h1>
          
          <nav className="flex items-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`text-sm font-bold tracking-wider uppercase transition-colors duration-200 px-3 py-2 rounded-full ${
                  activeSection === section.id
                    ? 'text-white bg-black'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;