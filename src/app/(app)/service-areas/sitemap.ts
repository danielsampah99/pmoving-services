import { getBlogs } from "@/data/blogs";
import { getServiceAreas } from "@/data/service-areas";
import { BASE_URL } from "@/utils";
import type { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const serviceAreas = await getServiceAreas();

	return serviceAreas.docs.map((area) => ({
		url: `${BASE_URL}/service-areas/${area.slug}`,
		lastModified: area.updatedAt,
		priority: 1,
		changeFrequency: 'monthly',
		images:
			typeof area.mapImage === "object"
				? [`${BASE_URL}${area.mapImage?.url}`]
				: undefined,
	}));
}
