"use client";
import type React from "react";
import { useState, useRef, useEffect } from "react";
import { Eye, Bookmark } from "lucide-react";
import type { GalleryImage } from "@/data/images";
import { Button } from "@headlessui/react";

interface ImageCardProps {
	image: GalleryImage;
	onClick: () => void;
	index: number;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick, index }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	// Staggered animation entrance delay based on index
	const entranceDelay = `${Math.min(index * 0.1, 1.5)}s`;

	useEffect(() => {
		// Create intersection observer for lazy loading
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					// Add load delay to stagger image loading
					setTimeout(() => {
						setIsLoaded(true);
					}, index * 50);

					// Stop observing once loaded
					if (cardRef.current) {
						observer.unobserve(cardRef.current);
					}
				}
			},
			{ threshold: 0.1 },
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, [index]);

	// Trim description for card
	const trimDescription = (desc: string, maxLength = 65) => {
		if (desc.length <= maxLength) return desc;
		return `${desc.substring(0, maxLength)}...`;
	};

	return (
		<div
			ref={cardRef}
			className={`
        image-card group animate-fade-in opacity-0
        ${isLoaded ? "opacity-100" : "opacity-0"}
      `}
			style={{
				animationDelay: entranceDelay,
				animationFillMode: "forwards",
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Image overlay with gradient */}
			<div
				className="relative overflow-hidden rounded-lg aspect-auto"
				onClick={onClick}
			>
				{/* Image */}
				<img
					src={image.thumbnail}
					alt={image.alt}
					className={`
            w-full object-cover image-zoom-effect
            ${isLoaded ? "opacity-100" : "opacity-0"}
          `}
					style={{
						height: `${Math.min(400, image.height / 2)}px`,
						transition: "opacity 0.5s ease, transform 0.7s ease",
					}}
					loading="lazy"
					onLoad={() => setIsLoaded(true)}
				/>

				{/* Overlay gradient */}
				<div
					className="
          absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
          opacity-60 group-hover:opacity-80 transition-opacity duration-300
        "
				/>

				{/* Hover overlay with zoom info */}
				<div
					className={`
          absolute inset-0 flex items-center justify-center
          bg-moving-primary/0 group-hover:bg-moving-primary/20
          transition-all duration-300 ease-in-out
        `}
				>
					<Button
						className={`
              px-4 py-2 rounded-full bg-white text-moving-primary
              flex items-center gap-1.5 text-sm font-medium
              transform scale-0 group-hover:scale-100 transition-transform
              duration-300 hover:bg-moving-lightGray
            `}
						aria-label="View image"
						onClick={(e) => {
							e.stopPropagation();
							onClick();
						}}
					>
						<Eye size={16} />
						<span>View</span>
					</Button>
				</div>

				{/* Featured badge */}
				{image.featured && (
					<div className="absolute top-3 right-3 bg-moving-primary text-white text-xs px-2 py-1 rounded-full flex items-center">
						<Bookmark size={12} className="mr-1" />
						<span>Featured</span>
					</div>
				)}
			</div>

			{/* Caption */}
			<div className="p-3 bg-white">
				<h3 className="font-medium text-moving-dark text-sm mb-1">
					{image.title}
				</h3>
				<p className="text-moving-gray text-xs">
					{trimDescription(image.description)}
				</p>
			</div>
		</div>
	);
};

export default ImageCard;
