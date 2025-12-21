import { SERVICE_AREA_BY_SLUG_TAG, SERVICE_AREAS_TAG } from "@/data/cache-keys";
import { revalidateTag } from "next/cache";
import { CollectionAfterChangeHook } from "payload";

export const revalidateServiceAreasCache: CollectionAfterChangeHook = async ({
	doc,
	previousDoc,
	operation,
}) => {
	try {
		// revalidate the list all service areas cache
		revalidateTag(SERVICE_AREAS_TAG());

		// revalidate a single service area page's cache
		if (doc.slug) {
			revalidateTag(SERVICE_AREA_BY_SLUG_TAG(doc.slug));
		}

		// revalidate the old slug if slug changed too
		if (
			operation === "update" &&
			previousDoc?.slug &&
			previousDoc.slug !== doc.slug
		) {
			revalidateTag(previousDoc.slug);
		}
	} catch (error) {
		console.error("Error invalidaing service areas cache: ", error);
	}
};
