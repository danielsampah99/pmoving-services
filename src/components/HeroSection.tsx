"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, Star } from "lucide-react";
import { Button } from "@headlessui/react";

const images = [
	{
		url: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshun+unloadingc-1200w.JPG",
		alt: "Professional movers loading a moving truck",
	},
	{
		url: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshun+and+Drake+c-1200w.jpg",
		alt: "Movers wrapping furniture with protective material",
	},
	{
		url: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/new+truck+c-4-2-1200w.jpg",
		alt: "Happy family in their new home after moving",
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

	// useEffect(() => {
	// 	const interval = setInterval(nextImage, 5000);
	// 	return () => clearInterval(interval);
	// }, [nextImage]);

	return (
		<div className="relative bg-background overflow-hidden">
			{/* Carousel */}
			<div className="relative w-full h-[70vh] md:h-[80vh] ">
				{images.map((image, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
							index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
						}`}
					>
						<img
							src={image.url}
							alt={image.alt}
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
						className="pointer-events-auto bg-white bg-opacity-70 hover:bg-opacity-90 p-1.5 md:p-2 rounded-full transition"
						aria-label="Previous"
					>
						<ChevronLeft className="text-moving-navy h-5 w-5 md:h-6 md:w-6" />
					</Button>
					<Button
						onClick={nextImage}
						className="pointer-events-auto bg-white bg-opacity-70 hover:bg-opacity-90 p-1.5 md:p-2 rounded-full transition"
						aria-label="Next"
					>
						<ChevronRight className="text-moving-navy h-5 w-5 md:h-6 md:w-6" />
					</Button>
				</div>

				{/* Dots */}
				<div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
					{images.map((_, index) => (
						<button
							key={index}
							type='button'
							onKeyDown={event => event.key === 'Enter' && setCurrentImage(index)}
							onClick={() => setCurrentImage(index)}
							className={`size-3 rounded-full transition ${
								index === currentImage ? "bg-white" : "bg-white/50"
							}`}
							aria-label={`Slide ${index + 1}`}
						/>
					))}
				</div>
			</div>

			{/* Overlay Content */}
			<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-8">
				<div className="text-white max-w-2xl w-full">
					<span className="inline-block bg-moving-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
						Professional & Reliable
					</span>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 drop-shadow-md">
						Local Moving Service
					</h1>
					<p className="text-base sm:text-lg md:text-xl drop-shadow-md mb-6">
						Reliable, same-day moves within Seattle and surrounding areas.
					</p>

					<div className="flex flex-wrap items-center justify-center gap-4 text-white text-sm md:text-base mb-6">
						<div className="flex items-center">
							<Star
								className="text-yellow-400 fill-yellow-400 mr-1"
								size={20}
							/>
							<span className="font-semibold">4.8/5</span>
							<span className="ml-1 opacity-90">(120 reviews)</span>
						</div>
						<div className="flex items-center">
							<Clock className="mr-1" size={20} />
							<span className="font-semibold">Same-day availability</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
