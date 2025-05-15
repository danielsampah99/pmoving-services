"use client";

import React, { useState } from "react";
import ImageModal from "./ImageModal";
import { Gallery, Media } from "@/payload-types";

interface GalleryGridProps {
	images: Gallery[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
	const [selectedImage, setSelectedImage] = useState<Gallery | null>(null);

	const handleImageClick = (image: Gallery) => {
		setSelectedImage(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

	const isMedia = (photo: number | Media): photo is Media =>
		typeof photo === "object" && "filename" in photo;

	const getImageUrl = (photo: number | Media): string => {
		if (isMedia(photo) && photo.filename) {
			return `https://pmoving-services.vercel.app/api/media/file/${encodeURIComponent(photo.filename)}`;
		}
		return "";
	};

	if (images.length === 0) {
		return (
			<div className="text-center py-16">
				<p className="text-gray-500 text-lg">
					No images match your filter. Try a different category.
				</p>
			</div>
		);
	}

	return (
		<>
			<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
				{images.map((image) => (
					<div
						key={image.id}
						onClick={() => handleImageClick(image)}
						className="relative mb-4 cursor-pointer overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-[1.03] hover:shadow-xl hover:z-10"
						style={{ breakInside: "avoid" }}
					>
						<img
							src={getImageUrl(image.Photo)}
							alt={
								isMedia(image.Photo) && image.Photo.alt
									? image.Photo.alt
									: "Gallery image"
							}
							className="w-full h-auto object-cover transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-105 hover:brightness-95"
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col justify-end p-4 group">
							<h3 className="text-white font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
								{image.title}
							</h3>
							{image.imageDescription && (
								<p className="text-gray-200 text-sm mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
									{image.imageDescription}
								</p>
							)}
							{image.ourPick && (
								<span className="absolute top-3 right-3 bg-bac text-xs text-white px-2 py-1 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300 delay-200">
									Our Pick
								</span>
							)}
						</div>
					</div>
				))}
			</div>

			{selectedImage && (
				<ImageModal
					image={selectedImage}
					onClose={closeModal}
					onNext={() => {
						const currentIndex = images.findIndex(
							(img) => img.id === selectedImage.id,
						);
						if (currentIndex < images.length - 1) {
							setSelectedImage(images[currentIndex + 1]);
						}
					}}
					onPrevious={() => {
						const currentIndex = images.findIndex(
							(img) => img.id === selectedImage.id,
						);
						if (currentIndex > 0) {
							setSelectedImage(images[currentIndex - 1]);
						}
					}}
					hasPrevious={
						images.findIndex((img) => img.id === selectedImage.id) > 0
					}
					hasNext={
						images.findIndex((img) => img.id === selectedImage.id) <
						images.length - 1
					}
				/>
			)}
		</>
	);
};

export default GalleryGrid;
