"use client";

import { Filter } from "lucide-react";
import { Button } from "@headlessui/react";
import type { FC } from "react";

interface FilterBarProps {
	categories: string[];
	selectedCategory: string;
	setSelectedCategory: (category: string) => void;
	className?: string;
}

const FilterBar: FC<FilterBarProps> = ({
	categories,
	selectedCategory,
	setSelectedCategory,
	className = "",
}) => {
	// Format category name for display
	const formatCategoryName = (category: string) => {
		if (category === "all") return "All";
		return category.charAt(0).toUpperCase() + category.slice(1);
	};

	return (
		<div className={`${className}`}>
			<div className="flex items-center mb-3">
				<Filter size={18} className="mr-2 text-moving-primary" />
				<h3 className="text-sm font-medium text-moving-dark">
					Filter by Category
				</h3>
			</div>

			<div className="flex flex-wrap gap-2">
				{categories.map((category) => (
					<Button
						type="button"
						key={category}
						onClick={() => setSelectedCategory(category)}
						className={`
              category-filter transition-all whitespace-nowrap
              ${
								selectedCategory === category
									? "active shadow-sm"
									: "text-moving-dark hover:bg-moving-lightGray"
							}
            `}
						aria-pressed={selectedCategory === category}
					>
						{formatCategoryName(category)}
					</Button>
				))}
			</div>
		</div>
	);
};

export default FilterBar;
