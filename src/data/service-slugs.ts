/**
 * Canonical list of every moving service page under /services.
 *
 * Hand-enumerated from the App Router tree on purpose: `src/data/services.ts`
 * drives nav menus and is neither complete (it is missing 7 routable pages such
 * as /services/piano-moving) nor fully correct (services.ts:271 and
 * services.ts:320 point at slugs that do not exist). Values are path-based
 * because "residential-movers" is routable at two different paths.
 */
export const SERVICE_SLUG_OPTIONS = [
	{ label: "Residential Moving", value: "residential-moving" },
	{ label: "Local Moving", value: "local-moving" },
	{ label: "Apartment Movers", value: "local-moving/apartment-movers" },
	{ label: "Condo Movers", value: "local-moving/condo-movers" },
	{ label: "HOA Movers", value: "local-moving/hoa-movers" },
	{ label: "Household Goods", value: "local-moving/household" },
	{ label: "Pack & Unpack", value: "local-moving/pack-and-unpack" },
	{ label: "Residential Movers", value: "local-moving/residential-movers" },
	{ label: "Commercial Moving", value: "commercial-moving" },
	{
		label: "Corporate Relocation",
		value: "commercial-moving/corporate-relocation",
	},
	{ label: "Office Movers", value: "commercial-moving/office-movers" },
	{ label: "Retail Relocation", value: "commercial-moving/retail-relocation" },
	{
		label: "Small Business Movers",
		value: "commercial-moving/small-business-movers",
	},
	{
		label: "Warehouse & Industrial",
		value: "commercial-moving/warehouse-industrial",
	},
	{ label: "Corporate Moving", value: "corporate-moving" },
	{ label: "Long Distance Moving", value: "long-distance-moving" },
	{
		label: "Employee Relocation",
		value: "long-distance-moving/employee-relocation",
	},
	{
		label: "Interstate Moving Specialists",
		value: "long-distance-moving/interstate-moving-specialists",
	},
	{
		label: "Long Distance Commercial",
		value: "long-distance-moving/long-distance-commercial",
	},
	{
		label: "Long Distance Residential",
		value: "long-distance-moving/long-distance-residential",
	},
	{ label: "Specialty Moving", value: "specialty-moving" },
	{ label: "Antique Furniture", value: "specialty-moving/antique-furniture" },
	{ label: "Furniture Moving", value: "specialty-moving/furniture-moving" },
	{ label: "Gun & Safe Moving", value: "specialty-moving/gun-and-safe-moving" },
	{ label: "Labor Only", value: "specialty-moving/labor-only" },
	{ label: "Load & Unloading", value: "specialty-moving/load-and-unloading" },
	{ label: "Senior Relocation", value: "specialty-moving/senior-relocation" },
	{ label: "International Moving", value: "international-moving" },
	{ label: "Junk Removal", value: "junk-removal" },
	{ label: "Logistics Services", value: "logistics-services" },
	{ label: "Packing Supplies", value: "packing-supplies" },
	{ label: "Piano Moving", value: "piano-moving" },
	{ label: "Storage Services", value: "storage-services" },
] as const satisfies readonly { label: string; value: string }[];

export type TServiceSlug = (typeof SERVICE_SLUG_OPTIONS)[number]["value"];

const SERVICE_LABELS = new Map<string, string>(
	SERVICE_SLUG_OPTIONS.map(({ label, value }) => [value, label]),
);

export const serviceLabel = (slug: string) => SERVICE_LABELS.get(slug) ?? slug;
