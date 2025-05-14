"use client"

import React from 'react';

interface CategoryFilterProps {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeFilter, setActiveFilter }) => {
  const categories = [
    { label: 'All', value: null },
    { label: 'Moving Crew', value: 'moving-crew' },
    { label: 'Moving Projects', value: 'moving-projects' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Long Distance', value: 'long-distance' },
    { label: 'Local', value: 'local' },
    { label: 'Storage', value: 'storage' },
    { label: 'International', value: 'international' }
  ];

  return (
    <div className="mb-10">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category.value || 'all'}
            onClick={() => setActiveFilter(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
              (category.value === activeFilter || (category.value === null && activeFilter === null))
                ? 'bg-background text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;