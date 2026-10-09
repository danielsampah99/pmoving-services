import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import { PRICING_TAG } from "./cache-keys";

/**
 * All active prices for a single service area, in render order.
 * Keyed on the service area id, tagged so any pricing edit busts every area.
 *
 * `v2` key part intentionally bypasses pre-fix entries that were cached with
 * `revalidate: false` (a one-year TTL in Vercel's durable Data Cache).
 */
export const getPricingForServiceArea = unstable_cache(
	async (areaId: number) => {
		const payload = await getPayload({ config });
		return await payload.find({
			collection: "service-pricing",
			where: {
				and: [
					{ destination: { equals: areaId } },
					{ active: { equals: true } },
				],
			},
			sort: "sortOrder",
			depth: 0,
			pagination: false,
		});
	},
	[PRICING_TAG(), "v2"],
	{ tags: [PRICING_TAG()], revalidate: 60 },
);

export type PricingForArea = Awaited<
	ReturnType<typeof getPricingForServiceArea>
>["docs"];
