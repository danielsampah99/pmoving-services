import { SERVICE_AREAS_TAG } from "@/data/cache-keys";
import { revalidatePath, revalidateTag } from "next/cache";
import type { CollectionAfterChangeHook } from "payload";

/**
 * Service areas are rendered in the global header (every page), the
 * /service-areas list and each /service-areas/[slug] page, so invalidate all
 * three plus the previous slug when it changes.
 */
export const revalidateServiceAreasCache: CollectionAfterChangeHook = async ({
	doc,
	previousDoc,
	operation,
	req,
}) => {
	try {
		revalidateTag(SERVICE_AREAS_TAG());

		revalidatePath("/service-areas/[slug]", "page");
		revalidatePath("/service-areas", "page");

		// The header lives in the root layout, so refresh it across the site.
		revalidatePath("/", "layout");

		if (doc?.slug) {
			revalidatePath(`/service-areas/${doc.slug}`, "page");
		}

		if (
			operation === "update" &&
			previousDoc?.slug &&
			previousDoc.slug !== doc?.slug
		) {
			revalidatePath(`/service-areas/${previousDoc.slug}`, "page");
		}

		req.payload.logger.info(
			`Revalidated service-areas cache after ${operation}`,
		);
	} catch (error) {
		req.payload.logger.error(
			{ err: error },
			"Error invalidating service areas cache",
		);
	}
};
