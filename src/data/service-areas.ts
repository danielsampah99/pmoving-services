import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import { SERVICE_AREAS_TAG } from "./cache-keys";

/**
 * `v2` key part intentionally bypasses pre-fix entries that were cached with
 * `revalidate: false` (a one-year TTL in Vercel's durable Data Cache).
 */
export const getServiceAreas = unstable_cache(
	async () => {
		const payload = await getPayload({ config });
		return await payload.find({
			collection: "service-areas",
			pagination: false,
			sort: "title",
			depth: 0,
		});
	},
	[SERVICE_AREAS_TAG(), "v2"],
	{ tags: [SERVICE_AREAS_TAG()], revalidate: 60 },
);

export type ServiceAreasType = Awaited<ReturnType<typeof getServiceAreas>>;
