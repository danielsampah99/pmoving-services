"use client";
import type React from "react";
import { useState, useEffect } from "react";
import {
	X,
	ChevronLeft,
	ChevronRight,
	Maximize,
	Minimize,
	Info,
} from "lucide-react";
import type { GalleryImage } from "../../data/images";
import { Button } from "@headlessui/react";

interface LightboxProps {
	images: GalleryImage[];
	currentIndex: number;
	onClose: () => void;
	onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
	images,
	currentIndex,
	onClose,
	onNavigate,
}) => {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showInfo, setShowInfo] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	const currentImage = images[currentIndex];
	const hasPrev = currentIndex > 0;
	const hasNext = currentIndex < images.length - 1;

	// Close lightbox on escape key
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			} else if (e.key === "ArrowLeft" && hasPrev) {
				onNavigate(currentIndex - 1);
			} else if (e.key === "ArrowRight" && hasNext) {
				onNavigate(currentIndex + 1);
			} else if (e.key === "f") {
				toggleFullscreen();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		// Prevent body scrolling while lightbox is open
		document.body.style.overflow = "hidden";

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [currentIndex, hasPrev, hasNext, onClose, onNavigate]);

	// Toggle fullscreen mode
	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement
				.requestFullscreen()
				.then(() => {
					setIsFullscreen(true);
				})
				.catch((err) => {
					console.log(`Error attempting to enable fullscreen: ${err.message}`);
				});
		} else {
			if (document.exitFullscreen) {
				document
					.exitFullscreen()
					.then(() => {
						setIsFullscreen(false);
					})
					.catch((err) => {
						console.log(`Error attempting to exit fullscreen: ${err.message}`);
					});
			}
		}
	};

	// Handle fullscreen change event
	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);

		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, []);

	// Reset loading state when changing images
	useEffect(() => {
		setIsLoading(true);
	}, [currentIndex]);

	// Handle touch events for swiping
	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe && hasNext) {
			onNavigate(currentIndex + 1);
		} else if (isRightSwipe && hasPrev) {
			onNavigate(currentIndex - 1);
		}

		setTouchStart(null);
		setTouchEnd(null);
	};

	// Prevent propagation of click events on the controls
	const handleControlClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<div
			className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
			onClick={onClose}
		>
			<div
				className=" mx-auto h-[calc(100vh-6rem)] rounded-lg overflow-hidden bg-transparent max-w-[90vw] relative"
				onClick={(e) => e.stopPropagation()}
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
			>
				{/* Loading indicator */}
				{isLoading && (
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-12 h-12 border-4 border-moving-lightGray border-t-moving-primary rounded-full animate-spin" />
					</div>
				)}

				{/* Image */}
				<div className="relative h-full flex items-center justify-center">
					<img
						src={currentImage.src}
						alt={currentImage.alt}
						className={`
              max-h-full max-w-full object-contain rounded-lg
              ${isLoading ? "opacity-0" : "opacity-100 animate-zoom-in"}
            `}
						onLoad={() => setIsLoading(false)}
					/>
				</div>

				{/* Navigation controls */}
				<div
					className="absolute top-1/2 w-full flex justify-between items-center px-4 transform -translate-y-1/2"
					onClick={handleControlClick}
				>
					{hasPrev && (
						<Button
							type="button"
							className="p-2 rounded-full bg-white bg-opacity-25 text-white backdrop-blur-sm hover:bg-opacity-40 hover:bg-moving-primary/40 transition-all"
							onClick={() => onNavigate(currentIndex - 1)}
							aria-label="Previous image"
						>
							<ChevronLeft size={24} />
						</Button>
					)}

					{hasNext && (
						<Button
							type="button"
							className="p-2 rounded-full bg-white bg-opacity-25 text-white backdrop-blur-sm hover:bg-opacity-40 hover:bg-moving-primary/40 transition-all"
							onClick={() => onNavigate(currentIndex + 1)}
							aria-label="Next image"
						>
							<ChevronRight size={24} />
						</Button>
					)}
				</div>

				{/* Top controls */}
				<div
					className="absolute top-4 right-4 flex items-center space-x-2"
					onClick={handleControlClick}
				>
					<Button
						type="button"
						className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-25 text-white backdrop-blur-sm hover:bg-opacity-40 hover:bg-moving-primary/40 transition-all"
						onClick={() => setShowInfo(!showInfo)}
						aria-label="Toggle image information"
					>
						<Info size={20} />
					</Button>

					<Button
						type="button"
						className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-25 text-white backdrop-blur-sm hover:bg-opacity-40 hover:bg-moving-primary/40 transition-all"
						onClick={toggleFullscreen}
						aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
					>
						{isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
					</Button>

					<Button
						className="absolute top-4 right-4 p-2 rounded-full bg-white bg-opacity-25 text-white backdrop-blur-sm hover:bg-opacity-40 hover:bg-moving-primary/40 transition-all"
						onClick={onClose}
						aria-label="Close lightbox"
					>
						<X size={20} />
					</Button>
				</div>

				{/* Bottom info panel */}
				<div
					className={`
            absolute bottom-0 left-0 right-0 p-4 glass text-white
            transform transition-transform duration-300 ease-in-out
            ${showInfo ? "translate-y-0" : "translate-y-full"}
          `}
				>
					<h3 className="text-lg font-medium mb-1">{currentImage.title}</h3>
					<p className="text-sm mb-2">{currentImage.description}</p>
					<div className="flex flex-wrap gap-2 mt-2">
						{currentImage.category.map((cat) => (
							<span
								key={cat}
								className="text-xs px-2 py-1 bg-white/20 rounded-full"
							>
								{cat}
							</span>
						))}
					</div>
				</div>

				{/* Image counter */}
				<div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm px-2.5 py-1 rounded-full">
					{currentIndex + 1} / {images.length}
				</div>
			</div>
		</div>
	);
};

export default Lightbox;
