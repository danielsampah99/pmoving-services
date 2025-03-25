"use client";

import { GalleryImage, galleryImages } from "@/data/images";
import { useState, useEffect, useMemo } from "react";

type UseImageSearchProps = {
	initialCategory?: string;
	initialSearchTerm?: string;
};

export const useImageSearch = ({
	initialCategory = "all",
	initialSearchTerm = "",
}: UseImageSearchProps = {}) => {
	const [images, setImages] = useState<GalleryImage[]>(galleryImages);
	const [filteredImages, setFilteredImages] =
		useState<GalleryImage[]>(galleryImages);
	const [selectedCategory, setSelectedCategory] =
		useState<string>(initialCategory);
	const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// Extract unique categories from the gallery images
	const categories = useMemo(() => {
		const uniqueCategories = Array.from(
			new Set(galleryImages.flatMap((img) => img.category)),
		).sort();
		return ["all", ...uniqueCategories]; // Add 'all' as the first category
	}, []);

	// Filter images based on selected category and search term
	useEffect(() => {
		setIsLoading(true);

		// Simulate loading delay for smoother UX
		const timer = setTimeout(() => {
			let results = [...galleryImages];

			// Filter by category if not 'all'
			if (selectedCategory !== "all") {
				results = results.filter((image) =>
					image.category.includes(selectedCategory),
				);
			}

			// Filter by search term if present
			if (searchTerm.trim() !== "") {
				const lowerSearchTerm = searchTerm.toLowerCase().trim();
				results = results.filter(
					(image) =>
						image.title.toLowerCase().includes(lowerSearchTerm) ||
						image.description.toLowerCase().includes(lowerSearchTerm) ||
						image.category.some((cat) =>
							cat.toLowerCase().includes(lowerSearchTerm),
						),
				);
			}

			setFilteredImages(results);
			setIsLoading(false);
		}, 300); // 300ms delay for perceived smoothness

		return () => clearTimeout(timer);
	}, [selectedCategory, searchTerm]);

	// Reset filters
	const resetFilters = () => {
		setSelectedCategory("all");
		setSearchTerm("");
	};

	return {
		images: filteredImages,
		allImages: galleryImages,
		categories,
		selectedCategory,
		setSelectedCategory,
		searchTerm,
		setSearchTerm,
		isLoading,
		resetFilters,
		hasResults: filteredImages.length > 0,
		noResultsMessage: "No images match your search criteria",
	};
};

export default useImageSearch;
