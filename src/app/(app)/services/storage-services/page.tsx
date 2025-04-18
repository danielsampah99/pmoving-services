import StorageContent from "@/components/StorageContent";

export default function StorageServices() {
  return (
    <>
      {/* Hero Section remains unchanged */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source
              srcSet="/images/hero-bg.jpg"
              media="(min-width: 2048px)"
            />
            <img
              src="https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-2048x1683.png"
              srcSet="https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-300x246.png 300w,
                      https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-600x493.png 600w,
                      https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-768x631.png 768w,
                      https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-1024x841.png 1024w,
                      https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-1536x1262.png 1536w,
                      https://mattsmoving.com/wp-content/uploads/2024/10/AdobeStock_357974356-1-2048x1683.png 2048w"
              sizes="(max-width: 300px) 300px,
                     (max-width: 600px) 600px,
                     (max-width: 768px) 768px,
                     (max-width: 1024px) 1024px,
                     (max-width: 1536px) 1536px,
                     2048px"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              alt=""
              aria-hidden="true"
            />
          </picture>
        </div>
    
        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Text Content */}
              <div className="text-white max-w-2xl">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                  Professional Storage Solutions
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-medium">
                  Secure, climate-controlled storage facilities with 24/7 monitoring 
                  and flexible rental options. Perfect for personal or business 
                  storage needs.
                </p>
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <button className="bg-background hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg transition-colors">
                    Get Started
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <StorageContent />
    </>
  );
}