import type { CollectionConfig } from "payload";

export const ServiceArea: CollectionConfig = {
	slug: "service-areas",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
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
	],
};
