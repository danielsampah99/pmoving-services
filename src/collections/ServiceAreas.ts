import type { CollectionConfig } from "payload";

export const ServiceArea: CollectionConfig = {
	slug: "service-areas",
	fields: [
		{
			name: "title",
			type: "text",
		},
		{
			name: "description",
			type: "text",
		},
		{
			name: "short-code",
			type: "text",
		},
		{
			name: "latitude",
			type: "number",
		},
		{
			name: "longitude",
			type: "number",
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
