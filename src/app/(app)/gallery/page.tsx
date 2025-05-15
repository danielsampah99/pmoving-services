import GalleryComponent from "@/components/Gallery/GalleryComponent";
import { getGallery } from "@/data/gallery";
import React from "react";

const Gallery = async () => {
	const gallery = await getGallery();

	return <GalleryComponent images={gallery.docs} />;
};

export default Gallery;
