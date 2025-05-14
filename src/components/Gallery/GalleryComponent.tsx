"use client"

import React, { useEffect, useState } from "react";
import { ArrowRight, Clock, Award, Star } from "lucide-react";

import CategoryFilter from "./CategoryFilter";
import GalleryGrid from "./GalleryGrid";
import { Gallery } from "@/payload-types";

interface GalleryComponentProps {
  images: Gallery[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ images }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredImages, setFilteredImages] = useState(images);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  
  useEffect(() => {
    // Add a small delay to ensure animations trigger after component mount
    const timer1 = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const timer2 = setTimeout(() => {
      setShowFilters(true);
    }, 400);
    
    const timer3 = setTimeout(() => {
      setShowGallery(true);
    }, 700);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  
  useEffect(() => {
    if (!activeFilter) {
      setFilteredImages(images);
      return;
    }
    
    setFilteredImages(
      images.filter(item => 
        item.categories.some(category => category === activeFilter)
      )
    );
  }, [activeFilter, images]);

  return (
    <div>
      <section className="relative bg-gradient-to-r to-[#d0dfec] from-[#f5d65e] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556912172-45b7abe8b7e1')] bg-cover bg-center mix-blend-overlay opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
                Moving Made <span className="text-moving-accent">Simple</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg animate-slide-in">
                Professional moving services with exceptional care and
                precision. We handle your belongings as if they were our own.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/free-quote"
                  className="px-6 py-3 rounded-lg bg-white text-background font-semibold text-lg hover:bg-[#FFD00D] hover:text-white transition-all duration-300 shadow-md"
                >
                  Get a Free Quote
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 rounded-lg border-2 border-white text-white font-semibold text-lg flex items-center gap-2 hover:bg-white hover:text-[#1E88E5] transition-all duration-300 shadow-md"
                >
                  Our Services <ArrowRight size={20} />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-4 md:gap-8">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-300" size={20} />
                  <span className="text-white font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="text-yellow-300" size={20} />
                  <span className="text-white font-medium">
                    Licensed & Insured
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-yellow-300" size={20} />
                  <span className="text-white font-medium">
                    On-Time Service
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      
      </section>

      <main className="mx-6 my-6">
	  <div className="max-w-7xl mx-auto">
        <header className={`text-center mb-12 transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 relative after:content-[''] after:absolute after:w-16 after:h-1 after:bg-yellow-500 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mt-2 after:transition-all after:duration-700 pb-3">
            Our Moving Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-500 delay-300">
            Browse through our collection of moving projects, services, and successful relocations.
          </p>
        </header>

        <div className={`transition-all duration-700 ${
          showFilters ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <CategoryFilter 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
        </div>
        
        <div className={`mt-8 transition-all duration-700 ${
          showGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <GalleryGrid images={filteredImages} />
        </div>
      </div>
      </main>
    </div>
  );
};

export default GalleryComponent;
