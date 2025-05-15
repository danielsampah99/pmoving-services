import { CollectionConfig } from "payload";

export const Gallery: CollectionConfig = {
	slug: "gallery",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			label: "Category",
			name: "categories",
			admin: {
				isSortable: true,
				isClearable: true,
			},
			options: [
				{ label: "Moving Crew", value: "moving-crew" },
				{ label: "Moving Projects", value: "moving-projects" },
				{ label: "Residential Moving", value: "residential" },
				{ label: "Commercial Moving", value: "commercial" },
				{ label: "Long Distance", value: "long-distance" },
				{ label: "Local Moving", value: "local" },
				{ label: "Storage", value: "storage" },
				{ label: "International Moving", value: "international" },
			],
			type: "select",
			hasMany: true,
			unique: true,
			required: true,
		},
		{
			label: "Photo",
			name: "Photo",
			relationTo: "media",
			type: "upload",
			required: true,
			index: true,
			admin: {
				description:
					"The image that will be displayed in the mansory photo grid",
			},
		},
		{
			label: "Title",
			name: "title",
			type: "text",
			required: true,
			admin: {
				placeholder: "The name of this image",
				description:
					"The given title will be displayed on the gallery page as a field to categorize images in addition to the categories field",
			},
		},
		{
			label: "Image Description",
			name: "imageDescription",
			type: "textarea",
			admin: {
				description:
					"Optional: A brief description of the image. This can be used for alt text or captions.",
			},
		},
		{
			label: "Our Pick",
			name: "ourPick",
			type: "checkbox",
			admin: {
				description:
					"Select to highlight this image as a company favorite in the gallery. 'Our Pick' images may be given special prominence to showcase exceptional work, key services, or customer successes.",
			},
			defaultValue: false,
		},
	],
};
