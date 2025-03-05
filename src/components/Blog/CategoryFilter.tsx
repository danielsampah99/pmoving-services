'use client'

import { categories } from "@/app/lib/blogPosts";


interface CategoryFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ activeCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
            activeCategory === category.id
              ? 'bg-background text-white border-blog-accent'
              : 'bg-white text-gray-300y border-gray-200 hover:bg-gray-50'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;