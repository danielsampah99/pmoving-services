// Data structure for gallery images

export interface GalleryImage {
    id: string;
    src: string;
    thumbnail: string;
    alt: string;
    title: string;
    description: string;
    category: string[];
    featured: boolean;
    width: number;
    height: number;
  }
  
  // Sample gallery images for a moving company
  export const galleryImages: GalleryImage[] = [
    {
      id: "img-1",
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      thumbnail: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&q=80",
      alt: "Professional movers packing household items",
      title: "Professional Packing Services",
      description: "Our team carefully packing and securing household items for a safe move.",
      category: ["Residential", "Packing"],
      featured: true,
      width: 1200,
      height: 800
    },
    {
      id: "img-2",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
      alt: "Modern living room ready for moving",
      title: "Residential Moving",
      description: "We handle residential moves with care and efficiency.",
      category: ["Residential", "Interior"],
      featured: true,
      width: 1200,
      height: 900
    },
    {
      id: "img-3",
      src: "https://images.unsplash.com/photo-1505628346881-b72b27e84530",
      thumbnail: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&q=80",
      alt: "Moving truck being loaded with furniture",
      title: "Loading Process",
      description: "Professional movers loading a truck with furniture and boxes.",
      category: ["Loading", "Transport"],
      featured: false,
      width: 1000,
      height: 1500
    },
    {
      id: "img-4",
      src: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a",
      thumbnail: "https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?w=500&q=80",
      alt: "Corporate office being relocated",
      title: "Corporate Relocation",
      description: "Seamless relocation services for businesses with minimal downtime.",
      category: ["Commercial", "Office"],
      featured: true,
      width: 1200,
      height: 600
    },
    {
      id: "img-5",
      src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
      thumbnail: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&q=80",
      alt: "Storage facility with boxes and furniture",
      title: "Secure Storage Solutions",
      description: "Climate-controlled storage facilities for your belongings.",
      category: ["Storage", "Warehouse"],
      featured: false,
      width: 900,
      height: 1200
    },
    {
      id: "img-6",
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
      alt: "International shipping containers being loaded",
      title: "International Moving",
      description: "We handle international relocations with expertise and care.",
      category: ["International", "Transport"],
      featured: true,
      width: 1200,
      height: 800
    },
    {
      id: "img-7",
      src: "https://images.unsplash.com/photo-1558882224-dda166733046",
      thumbnail: "https://images.unsplash.com/photo-1558882224-dda166733046?w=500&q=80",
      alt: "Movers carefully handling antique furniture",
      title: "Specialty Moving",
      description: "Special care for antiques, artwork, and other valuable items.",
      category: ["Specialty", "Residential"],
      featured: false,
      width: 800,
      height: 1000
    },
    {
      id: "img-8",
      src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      thumbnail: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80",
      alt: "Office workstations ready for corporate move",
      title: "Office Relocation",
      description: "Expert handling of office equipment and workstations.",
      category: ["Commercial", "Office"],
      featured: false,
      width: 1200,
      height: 900
    },
    {
      id: "img-9",
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1",
      thumbnail: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500&q=80",
      alt: "Moving truck on the highway",
      title: "Long Distance Moving",
      description: "Reliable long-distance moving services across the country.",
      category: ["Transport", "Long Distance"],
      featured: true,
      width: 1600,
      height: 800
    },
    {
      id: "img-10",
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      thumbnail: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&q=80",
      alt: "Family moving into new home",
      title: "Family Moves",
      description: "Making family relocations smooth and stress-free.",
      category: ["Residential", "Family"],
      featured: false,
      width: 1000,
      height: 1200
    },
    {
      id: "img-11",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
      alt: "Modern kitchen packed for moving",
      title: "Kitchen Packing",
      description: "Expert packing of kitchen items for safe transport.",
      category: ["Packing", "Residential"],
      featured: false,
      width: 1200,
      height: 900
    },
    {
      id: "img-12",
      src: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a",
      thumbnail: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&q=80",
      alt: "Moving truck with company logo",
      title: "Our Fleet",
      description: "Our modern fleet of moving trucks equipped for any move.",
      category: ["Transport", "Equipment"],
      featured: true,
      width: 1400,
      height: 800
    }
  ];
  
  // Extract unique categories from the gallery images
  export const categories = Array.from(
    new Set(galleryImages.flatMap(img => img.category))
  ).sort();