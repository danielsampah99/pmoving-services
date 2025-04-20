import config from "@payload-config";
import { getPayload } from "payload";

export async function getServiceAreas() {
	const payload = await getPayload({ config });
	return await payload.find({
		collection: "service-areas",
		pagination: false,
		sort: "title",
	});
}

export type ServiceAreasType = Awaited<ReturnType<typeof getServiceAreas>>;
