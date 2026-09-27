import { PRICING_TAG } from "@/data/cache-keys";
import { revalidateTag } from "next/cache";
import type {
	CollectionAfterChangeHook,
	CollectionAfterDeleteHook,
} from "payload";

export const revalidatePricingCache: CollectionAfterChangeHook = async () => {
	try {
		revalidateTag(PRICING_TAG());
	} catch (error) {
		console.error("Error invalidating service pricing cache: ", error);
	}
};

export const deletePricingCache: CollectionAfterDeleteHook = async () => {
	try {
		revalidateTag(PRICING_TAG());
	} catch (error) {
		console.error("Error invalidating service pricing cache: ", error);
	}
};
