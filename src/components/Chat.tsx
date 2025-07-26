import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getChatResponse } from '../services/cohere';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hey! I'm XYLA. What's on your mind?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollToBottom();
    });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const messageContent = inputValue.trim();
    setInputValue('');

    const userMessage: Message = {
      id: Date.now().toString(),
      content: messageContent,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await getChatResponse(messageContent);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Something went wrong. Try again?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
      
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-center min-h-[80vh] items-center relative z-10">
          <div className="relative w-full max-w-6xl">
            <div className="border-4 border-black bg-white h-[600px] flex flex-col overflow-hidden">
              {/* Messages */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
                style={{ scrollBehavior: 'smooth' }}
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className="max-w-lg">
                      <div
                        className={`px-4 py-3 ${
                          message.isUser
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-black border-2 border-gray-200'
                        }`}
                      >
                        <p className="text-base leading-relaxed font-normal">{message.content}</p>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-700 font-medium tracking-wide">
                          {message.isUser ? 'YOU' : 'XYLA'} • {message.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-lg">
                      <div className="bg-gray-100 border-2 border-gray-200 px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <span className="text-sm text-gray-700 font-medium tracking-wide">
                          XYLA • TYPING...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t-4 border-black p-4 flex-shrink-0 bg-white">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-black text-base font-normal transition-colors"
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="px-8 py-3 bg-black text-white text-base font-medium hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Minimal corner accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-black"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;