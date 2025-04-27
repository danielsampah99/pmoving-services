"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@headlessui/react";

import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import ImageCard from "./ImageCard";
import Lightbox from "./Lightbox";
import { useImageSearch } from "@/hooks/useImageSearch";

interface GalleryProps {
	className?: string;
}

const Gallery: React.FC<GalleryProps> = ({ className = "" }) => {
	const [showLightbox, setShowLightbox] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [showBackToTop, setShowBackToTop] = useState(false);
	const galleryRef = useRef<HTMLDivElement>(null);

	const {
		images,
		categories,
		selectedCategory,
		setSelectedCategory,
		searchTerm,
		setSearchTerm,
		isLoading,
		hasResults,
		noResultsMessage,
	} = useImageSearch();

	// Show/hide back to top Button
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setShowBackToTop(true);
			} else {
				setShowBackToTop(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Open lightbox with selected image
	const openLightbox = (index: number) => {
		setCurrentImageIndex(index);
		setShowLightbox(true);
	};

	// Close lightbox
	const closeLightbox = () => {
		setShowLightbox(false);
	};

	// Navigate to a specific image in lightbox
	const navigateToImage = (index: number) => {
		setCurrentImageIndex(index);
	};

	// Scroll back to top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div ref={galleryRef} className={`gallery-container ${className}`}>
			{/* Header section */}
			<div className="mb-8 text-center">
				<h1 className="text-3xl md:text-4xl font-bold text-moving-dark mb-2 tracking-tight">
					Our Moving Gallery
				</h1>
				<p className="text-moving-gray max-w-2xl mx-auto">
					Browse through our gallery showcasing our professional moving
					services, equipment, and satisfied customers.
				</p>
			</div>

			{/* Search and filter section */}
			<div className="mb-8 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-4 items-start">
				{/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="w-full" /> */}
				<FilterBar
					categories={categories}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</div>

			{/* Main gallery grid */}
			{isLoading ? (
				<div className="flex justify-center items-center py-20">
					<div className="w-12 h-12 border-4 border-moving-lightGray border-t-moving-primary rounded-full animate-spin" />
				</div>
			) : (
				<>
					{hasResults ? (
						<div className="masonry-grid">
							{images.map((image, index) => (
								<ImageCard
									key={image.id}
									image={image}
									index={index}
									onClick={() => openLightbox(index)}
								/>
							))}
						</div>
					) : (
						<div className="text-center py-16 bg-moving-lightGray/30 rounded-lg">
							<p className="text-moving-gray text-lg mb-4">
								{noResultsMessage}
							</p>
							<Button
								type="button"
								onClick={() => {
									setSelectedCategory("all");
									setSearchTerm("");
								}}
								className="btn-secondary"
							>
								Reset Filters
							</Button>
						</div>
					)}
				</>
			)}

			{/* CTA section */}
			<div className="mt-16 bg-moving-primary/10 p-8 rounded-xl text-center">
				<h2 className="text-2xl font-semibold text-moving-dark mb-3">
					Ready for Your Move?
				</h2>
				<p className="text-moving-gray mb-6 max-w-2xl mx-auto">
					Our professional moving team is prepared to make your next relocation
					smooth and stress-free. Contact us today!
				</p>
				<a href="#quote" className="btn btn-primary">
					Get a Free Quote
				</a>
			</div>

			{/* Back to top Button */}
			<Button
				type="button"
				className={`
          fixed bottom-6 right-6 p-3 rounded-full bg-moving-primary text-white shadow-lg
          transition-all duration-300 hover:bg-moving-secondary
          ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
				onClick={scrollToTop}
				aria-label="Back to top"
			>
				<ArrowUp size={20} />
			</Button>

			{/* Lightbox */}
			{showLightbox && (
				<Lightbox
					images={images}
					currentIndex={currentImageIndex}
					onClose={closeLightbox}
					onNavigate={navigateToImage}
				/>
			)}
		</div>
	);
};

export default Gallery;
