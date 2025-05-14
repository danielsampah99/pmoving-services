import config from "@payload-config";
import { getPayload } from "payload";

export async function getGallery() {
	const payload = await getPayload({ config });
	return await payload.find({
		collection: "gallery",
		pagination: false,
		sort: "-createdAt",
	});
}

export type GalleryType = Awaited<ReturnType<typeof getGallery>>;
