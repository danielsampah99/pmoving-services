import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import { SERVICE_AREAS_TAG } from "./cache-keys";

export const getServiceAreas = unstable_cache(async () => {
	const payload = await getPayload({ config });
	return await payload.find({
		collection: "service-areas",
		pagination: false,
		sort: "title",
	});
}, [SERVICE_AREAS_TAG()], { tags: [SERVICE_AREAS_TAG()], revalidate: false })

export type ServiceAreasType = Awaited<ReturnType<typeof getServiceAreas>>;
