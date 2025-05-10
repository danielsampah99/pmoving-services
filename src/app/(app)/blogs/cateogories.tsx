"use client";

import { cn } from "@/utils";
import { Button } from "@headlessui/react";
import type { FC } from "react";

export type CategoryFilterProps = {
	categories: string[];
	activeCategory: string;
	onCategoryChange: (category: string) => void;
};

export const CategoryList: FC<CategoryFilterProps> = (props) => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{props.categories.map((category) => (
				<Button
					key={category}
					type="button"
					onClick={() => props.onCategoryChange(category)}
					className={cn(
						"inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors border",
						props.activeCategory === category
							? "bg-background text-white border-blog-accent"
							: "bg-white text-gray-300y border-gray-200 hover:bg-gray-50",
					)}
				>
					{category}
				</Button>
			))}
		</div>
	);
};
