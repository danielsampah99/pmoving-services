"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";
import { Button } from "@headlessui/react";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const images = [
	{
		url: "/api/media/file/Deshun%20Unloading.jpg",
		alt: "Professional movers loading a moving truck",
	},
	{
		url: "/api/media/file/Deshun%20and%20Drake.webp",
		alt: "Deshun and Drake moving boxes",
	},
	{
		url: "/api/media/file/new%20truck.jpg",
		alt: "Truck 1",
	},
];

export const HeroSection = () => {
	const [currentImage, setCurrentImage] = useState(0);

	const nextImage = () => {
		setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const prevImage = () => {
		setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	return (
		<div className="relative bg-background overflow-hidden">
			{/* Carousel */}
			<div className="group relative w-full h-[70vh] md:h-[80vh] ">
				{images.map((image, index) => (
					<div
						key={index}
						className={cn(
							"absolute inset-0 transisiton-opacity duration-300 ease-in-out",
							index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0",
						)}
					>
						<Image
							src={image.url}
							alt={image.alt}
							width={1024}
							height={1024}
							className="w-full h-full object-cover"
							loading="eager"
						/>
						<div className="absolute inset-0 bg-black/30" />
					</div>
				))}

				{/* Arrows */}
				<div className="absolute top-[35%] md:top-1/2 -translate-y-1/2 left-2 right-2 md:left-4 md:right-4 z-30 flex justify-between pointer-events-none">
					<Button
						onClick={prevImage}
						className="pointer-events-auto bg-white/70 hover:bg-white backdrop-blur-xs p-1.5 md:p-2 rounded-full transition"
						aria-label="Previous"
					>
						<ChevronLeft className="text-moving-navy size-5 md:size-6" />
					</Button>
					<Button
						onClick={nextImage}
						className="pointer-events-auto bg-white/70 hover:bg-white backdrop-blur-xs p-1.5 md:p-2 rounded-full transition"
						aria-label="Next"
					>
						<ChevronRight className="text-moving-navy size-5 md:size-6" />
					</Button>
				</div>

				{/* Dots */}
				<div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-30">
					{images.map((_, index) => (
						<ImageDot
							index={index}
							currentImageIndex={currentImage}
							key={index}
							onDotClick={setCurrentImage}
						/>
					))}
				</div>
			</div>

			{/* Overlay Content */}
			<div className="absolute inset-0 z-20 sm:-mt-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
				<div className="text-white max-w-2xl w-full">
					<div className="hidden sm:mb-8 sm:flex sm:justify-center">
						<div className="relative rounded-full px-3 py-1 backdrop-blur-md font-medium text-sm/6 text-gray-50 ring-1 ring-gray-300 ring-inset shadow-inner hover:ring-gray-white/50">
							Fast, reliable movers for homes, apartments & seniors. &nbsp;
							<Link
								href="/blogs/what-to-do-while-movers-are-moving"
								className="font-semibold text-moving-yellow"
							>
								<span aria-hidden="true" className="absolute inset-0" />
								Read more <span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-md">
						Local Moving Service
						<span className="sr-only">Premim Movers</span>
					</h1>
				</div>
			</div>
		</div>
	);
};

type ImageDotProps = {
	index: number;
	currentImageIndex: number;
	onDotClick(imageIndex: number): void;
};

const ImageDot = ({ index, onDotClick, currentImageIndex }: ImageDotProps) => {
	return (
		<Button
			key={index}
			type="button"
			onKeyDown={(event) => event.key === "Enter" && onDotClick(index)}
			onClick={(event) => {
				console.dir(event);
				onDotClick(index);
			}}
			aria-label={`Slide ${index + 1}`}
		>
			<div
				className={cn(
					"rounded-full size-3 transition-colors",
					index === currentImageIndex ? "bg-white" : "bg-white/50",
				)}
			/>
		</Button>
	);
};
