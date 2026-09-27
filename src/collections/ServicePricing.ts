import type { CollectionConfig } from "payload";
import { SERVICE_SLUG_OPTIONS } from "@/data/service-slugs";
import {
	deletePricingCache,
	revalidatePricingCache,
} from "./hooks/revalidate-pricing";

export type TPricingCategory = "residential" | "commercial" | "specialty";

export type TPricingUnit =
	| "per-move"
	| "per-hour"
	| "per-month"
	| "per-item"
	| "per-pound";

export const ServicePricing: CollectionConfig = {
	slug: "service-pricing",
	admin: {
		useAsTitle: "title",
		defaultColumns: [
			"title",
			"category",
			"service",
			"label",
			"minPrice",
			"unit",
		],
	},
	defaultSort: "sortOrder",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			admin: {
				placeholder: "2–3 Bedroom Apartment - Shakopee",
				description:
					'Internal label used to identify this row in the admin list. Example: "2-3 Bedroom Apartment - Minnetonka"',
			},
		},
		{
			name: "category",
			type: "select",
			required: true,
			hasMany: false,
			defaultValue: "residential",
			options: [
				{ label: "Residential", value: "residential" },
				{ label: "Commercial", value: "commercial" },
				{ label: "Specialty & Add-Ons", value: "specialty" },
			],
			admin: {
				description:
					"Groups the row under a heading on the service area page. On the service area page, it will always show in this order",
			},
		},
		{
			name: "service",
			type: "select",
			required: true,
			index: true,
			defaultValue: "local-moving/residential-movers",
			options: [...SERVICE_SLUG_OPTIONS],
			admin: {
				description:
					'Which service page this price belongs to, relative to /services. Example: "piano-moving"',
			},
		},
		{
			name: "destination",
			type: "relationship",
			relationTo: "service-areas",
			required: true,
			index: true,
			admin: {
				description:
					"The service area (city) this price applies to. This is also shown on this city's page",
			},
		},
		{
			name: "label",
			type: "text",
			required: true,
			admin: {
				placeholder: "2–3 Bedroom Apartment",
				description:
					"The heading customers read. Example: 2-3 Bedroom Apartment",
			},
		},
		{
			name: "minPrice",
			type: "number",
			required: true,
			min: 0,
			defaultValue: 800,
			admin: {
				description:
					'Floor price in USD. Shown as "from $X" when no max price is set. Example: 800',
			},
		},
		{
			name: "maxPrice",
			type: "number",
			min: 0,
			defaultValue: 1800,
			admin: {
				description:
					"Leave empty when there is no upper bound. Shown as a range only when set.",
			},
		},
		{
			name: "unit",
			type: "select",
			required: true,
			hasMany: false,
			defaultValue: "per-move",
			options: [
				{ label: "Per Move", value: "per-move" },
				{ label: "Per Hour", value: "per-hour" },
				{ label: "Per Month", value: "per-month" },
				{ label: "Per Item", value: "per-item" },
				{ label: "Per Pound", value: "per-pound" },
			],
			admin: {
				description: "How the price is billed. The suffix next to the number.",
			},
		},
		{
			name: "includes",
			type: "array",
			label: "What's Included",
			maxRows: 4,
			labels: {
				plural: "Included Items",
				singular: "Included Item",
			},
			fields: [
				{
					name: "text",
					type: "text",
					admin: {
						placeholder: "2 movers, 2-3 hours",
						description:
							'Short qualifier shown under the price. Example: "2 movers, 2-3 hours"',
					},
				},
			],
		},
		{
			name: "sortOrder",
			type: "number",
			defaultValue: 0,
			admin: { description: "Lower numbers render first within a group." },
		},
		{
			name: "active",
			type: "checkbox",
			defaultValue: true,
			admin: {
				description:
					"Uncheck to hide this price from the page without deleting it.",
			},
		},
	],
	hooks: {
		afterChange: [revalidatePricingCache],
		afterDelete: [deletePricingCache],
	},
};
