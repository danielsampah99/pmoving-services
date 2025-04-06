'use client'
import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 md:hidden z-50 animate-bounce">
      <a
        href="tel:+18772696461"
        className="flex items-center justify-center h-14 w-14 bg-moving-yellow rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200"
        aria-label="Call Us"
      >
        <Phone size={24} className="text-moving-dark-gray" />
      </a>
    </div>
  );
};

export default FloatingCallButton;