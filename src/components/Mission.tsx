"use client"
import { useEffect, useRef } from 'react';
import { Activity, Zap, Target, Lightbulb } from 'lucide-react';

const Mission = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-up');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
      elements?.forEach((el) => observer.observe(el));
  
      return () => observer.disconnect();
    }, []);
  
    return (
      <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're dedicated to revolutionizing movement through innovative technology and thoughtful design.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="animate-on-scroll opacity-0">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Innovation in motion"
                  className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-8 animate-on-scroll opacity-0">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gray-100 animate-float">
                    <Activity className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    Pushing boundaries through research and development to create groundbreaking solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gray-100 animate-float" style={{ animationDelay: "0.2s" }}>
                    <Zap className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Efficiency First</h3>
                  <p className="text-gray-600">
                    Optimizing performance while maintaining simplicity and user-friendliness.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gray-100 animate-float" style={{ animationDelay: "0.4s" }}>
                    <Target className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision Engineering</h3>
                  <p className="text-gray-600">
                    Crafting every component with meticulous attention to detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="text-center animate-on-scroll opacity-0">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-6 animate-float">
              <Lightbulb className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Looking to the Future</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our vision extends beyond the present, as we continue to explore new possibilities and push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Mission;