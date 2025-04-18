"use client";

import { categories } from "@/data/blogs";
import { Button } from "@headlessui/react";

interface CategoryFilterProps {
	activeCategory: string;
	onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({
	activeCategory,
	onCategoryChange,
}: CategoryFilterProps) => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{categories.map((category) => (
				<Button
					key={category.id}
					type="button"
					onClick={() => onCategoryChange(category.id)}
					className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors border ${
						activeCategory === category.id
							? "bg-background text-white border-blog-accent"
							: "bg-white text-gray-300y border-gray-200 hover:bg-gray-50"
					}`}
				>
					{category.name}
				</Button>
			))}
		</div>
	);
};

export default CategoryFilter;
