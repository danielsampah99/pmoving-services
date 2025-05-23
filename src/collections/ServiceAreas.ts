import {
	FixedToolbarFeature,
	lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { CollectionConfig } from "payload";

export const ServiceArea: CollectionConfig = {
	slug: "service-areas",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			admin: {
				description: "Just the name of the service area or city.",
				placeholder: "Shakopee",
			},
		},
		{
			name: "slug",
			type: "text",
			index: true,
			unique: true,
			required: true,
			label: "Slug or unique identifier based on name of the service area",
			admin: {
				placeholder: "shakopee-mn",
				description:
					'This is a unique string for identifying a moving service area. For example, given a city with title, "Shakopee", a unique slug could be"shakopee". this is slug will also be used in the urls for service area pages. "/service-areas/[slug]", "/service-areas/shakopee"',
			},
			hooks: {
				beforeValidate: [
					({ value }) => {
						// convert the value in the slug field to lowercase and replace the whitespaces with dashes.
						if (value) {
							return value?.trim().toLowerCase().replace(/\s+/g, "-");
						}
					},
				],
			},
		},
		{
			name: "mapUrl",
			type: "text",
			required: false,
			index: true,
			unique: true,
			label: "Map URL",
			admin: {
				placeholder: "Enter the google/apple maps url to this location",
				description:
					"This field should contain the map url to this city. It enables the redirection of the user to the place on the map",
			},
		},
		{
			name: "mapImage",
			type: "upload",
			relationTo: "media",
			filterOptions: {
				mimeType: { contains: "image" },
			},
			label: "Map Image",
			admin: {
				description: "The location of this service area on the map",
			},
		},
		{
			name: "description",
			type: "text",
			required: true,
		},
		{
			name: "short-code",
			type: "text",
			required: true,
		},
		{
			name: "latitude",
			type: "number",
			required: true,
		},
		{
			name: "longitude",
			type: "number",
			required: true,
		},
		{
			name: "state-name",
			type: "text",
			required: true,
			admin: {
				description: "What state does this service area or city belong to?",
			},
		},
		{
			name: "state-initials",
			type: "text",
			required: true,
			admin: {
				description:
					"The two-letter word initials of the state this service area or city belongs to. Example if city is Minnesota, state initials should be MN",
			},
		},
		{
			name: "faqs",
			type: "array",
			label: "Frequently Asked Questions(FAQs)",
			minRows: 1,
			maxRows: 10,
			labels: {
				plural: "Frequently Asked Questions",
				singular: "Frequently Asked Question",
			},
			fields: [
				{
					name: "question",
					type: "text",
					required: true,
					admin: {
						placeholder: "How can I avoid hidden fees",
						description:
							'Sample question about this service area concerning moving. Example: "How can I avoid hidden fees"',
					},
				},
				{
					name: "answer",
					type: "text",
					required: true,
					admin: {
						placeholder: "Sample answer",
						description:
							'Answer or response to the question. Example: "Get free written estimate and ask about additional charges for stairs, long carries, or bulky items."',
					},
				},
			],
		},
		{
			name: "resources",
			type: "array",
			label: "Moving Resources",
			minRows: 1,
			maxRows: 30,
			labels: {
				plural: "Moving Resources",
				singular: "Moving Resource",
			},
			fields: [
				{
					name: "title",
					type: "text",
					admin: {
						placeholder: "Resource name",
						description: "Name of the resource",
					},
				},
				{
					name: "link",
					type: "text",
					admin: {
						placeholder: "https://external-url.com",
						description: "a link or url pointing to the name of the resource",
					},
				},
			],
		},
		{
			name: "movingServices",
			type: "array",
			label: "Moving Services",
			minRows: 1,
			maxRows: 10,
			labels: {
				plural: "Moving Services",
				singular: "Moving Service",
			},
			fields: [
				{
					name: "title",
					type: "text",
					label: "Moving Service",
					required: true,
					admin: {
						readOnly: false,
						description:
							'Title of the moving service. Example: "Albert Lea Residential Movers"',
					},
				},
				{
					name: "content",
					type: "richText",
					label: "Content",
					required: true,
					editor: lexicalEditor({
						features: ({ defaultFeatures }) => [
							...defaultFeatures,
							FixedToolbarFeature(),
						],
					}),
					admin: {
						readOnly: false,
						description:
							"Rich text about the moving service. Can include links to external websites ",
					},
				},
				{
					name: "image",
					type: "upload",
					admin: { description: "Moving Service Image", readOnly: false },
					relationTo: "media",
				},
			],
		},
	],
};
