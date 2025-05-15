"use client";

import React, { useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Gallery, Media } from "@/payload-types";
import * as Dialog from "@radix-ui/react-dialog";

interface ImageModalProps {
	image: Gallery;
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
	hasPrevious: boolean;
	hasNext: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({
	image,
	onClose,
	onNext,
	onPrevious,
	hasPrevious,
	hasNext,
}) => {
	const categoryLabels: Record<string, string> = {
		"moving-crew": "Moving Crew",
		"moving-projects": "Moving Projects",
		residential: "Residential Moving",
		commercial: "Commercial Moving",
		"long-distance": "Long Distance",
		local: "Local Moving",
		storage: "Storage",
		international: "International Moving",
	};

	const isMedia = (photo: number | Media): photo is Media =>
		typeof photo === "object" && "filename" in photo;

	const imageUrl =
		isMedia(image.Photo) && image.Photo.filename
			? `https://pmoving-services.vercel.app/api/media/file/${encodeURIComponent(image.Photo.filename)}`
			: "";

	const altText = isMedia(image.Photo) ? image.Photo.alt : "Gallery image";

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			} else if (e.key === "ArrowRight" && hasNext) {
				onNext();
			} else if (e.key === "ArrowLeft" && hasPrevious) {
				onPrevious();
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

	return (
		<Dialog.Root open={true} onOpenChange={(open) => !open && onClose()}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
				<Dialog.Content
					className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] z-50 overflow-y-auto"
					onInteractOutside={(e) => e.preventDefault()}
				>
					<div className="bg-white rounded-lg overflow-hidden shadow-xl">
						<div className="relative">
							{/* Navigation Arrows */}
							{hasPrevious && (
								<button
									onClick={(e) => {
										e.stopPropagation();
										onPrevious();
									}}
									className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
									aria-label="Previous image"
								>
									<ArrowLeft className="h-5 w-5" />
								</button>
							)}

							{hasNext && (
								<button
									onClick={(e) => {
										e.stopPropagation();
										onNext();
									}}
									className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
									aria-label="Next image"
								>
									<ArrowRight className="h-5 w-5" />
								</button>
							)}

							{/* Close Button */}
							<Dialog.Close asChild>
								<button
									className="absolute top-4 right-4 z-10 bg-black/50 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
									aria-label="Close"
								>
									<X className="h-5 w-5" />
								</button>
							</Dialog.Close>

							{/* Image and Content */}
							<div className="grid md:grid-cols-2">
								<div className="h-[50vh] md:h-[70vh]">
									{imageUrl ? (
										<img
											src={imageUrl}
											alt={altText}
											className="w-full h-full object-cover"
										/>
									) : (
										<div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
											Image not available
										</div>
									)}
								</div>

								<div className="p-6 flex flex-col">
									<div className="flex justify-between items-start mb-4">
										<Dialog.Title className="text-2xl font-bold text-gray-900">
											{image.title}
										</Dialog.Title>
										{image.ourPick && (
											<span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm">
												Our Pick
											</span>
										)}
									</div>

									{image.imageDescription && (
										<Dialog.Description className="text-gray-600 mb-6">
											{image.imageDescription}
										</Dialog.Description>
									)}

									<div className="mt-auto">
										<h3 className="text-sm text-gray-500 mb-2">Categories:</h3>
										<div className="flex flex-wrap gap-2">
											{image.categories?.map((category) => (
												<span
													key={category}
													className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs"
												>
													{categoryLabels[category] || category}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default ImageModal;
