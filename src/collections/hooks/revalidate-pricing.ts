import { PRICING_TAG } from "@/data/cache-keys";
import { revalidatePath, revalidateTag } from "next/cache";
import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

/**
 * Pricing rows only render on the /service-areas/[slug] pages, so invalidating
 * every page of that dynamic route covers create, update and delete regardless
 * of which destination the row points at.
 */
export const revalidatePricingCache: CollectionAfterChangeHook = async ({
	req,
	operation,
}) => {
	try {
		revalidateTag(PRICING_TAG());
		revalidatePath("/service-areas/[slug]", "page");
		req.payload.logger.info(
			`Revalidated service-pricing cache after ${operation}`,
		);
	} catch (error) {
		req.payload.logger.error(
			{ err: error },
			"Error invalidating service pricing cache",
		);
	}
};

export const deletePricingCache: CollectionAfterDeleteHook = async ({
	req,
}) => {
	try {
		revalidateTag(PRICING_TAG());
		revalidatePath("/service-areas/[slug]", "page");
		req.payload.logger.info("Revalidated service-pricing cache after delete");
	} catch (error) {
		req.payload.logger.error(
			{ err: error },
			"Error invalidating service pricing cache",
		);
	}
};
