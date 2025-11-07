import { CollectionConfig } from "payload";

export type TBarChart = "bar" | "line" | "pie" | "radar" | "radial" | "area";

export const Charts: CollectionConfig = {
	slug: "charts",
	admin: {
		useAsTitle: 'title'
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "chartType",
			label: "Type of Chart",
			type: "select",
			options: [
				{ label: "Area Chart", value: "area" },
				{ label: "Bar Chart", value: "bar" },
				{ label: "Line Graph", value: "line" },
				{ label: "Pie Chart", value: "pie" },
				{ label: "Radar Graph", value: "radar" },
				{ label: "Radial Chart", value: "radial" },
			],
			required: true,
			hasMany: false,
			admin: {
				description: "Select a type of chart from the options",
			},
		},
		{
			name: 'data',
			type: 'json',
			required: true,
			admin: { description: "List data for recharts" }
		},
		{
			name: "config",
			type: 'json',
			required: true,
			admin: { description: "Configuration for the data, colors and data keys" }
		},
		{
			name: 'dimensions',
			type: 'group',
			fields: [
				{
					name: 'width',
					type: 'number',
					defaultValue: 400
				},
				{
					name: 'height',
					type: 'number',
					defaultValue: 400
				}
			]
		}
	],
};
