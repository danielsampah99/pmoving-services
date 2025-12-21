import { getBlogs } from "@/data/blogs";
import { getServiceAreas } from "@/data/service-areas";
import { BASE_URL } from "@/utils";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
	const serviceAreas = await getServiceAreas();

	return serviceAreas.docs.map((area) => ({ id: area.slug }));
}

export default async function sitemap({
	slug,
}: { slug: string }): Promise<MetadataRoute.Sitemap> {
	const serviceAreas = await getServiceAreas();

	return serviceAreas.docs.map((area) => ({
		url: `${BASE_URL}/service-areas/${slug}`,
		lastModified: area.updatedAt,
		images:
			typeof area.mapImage === "object"
				? [`${BASE_URL}/${area.mapImage?.url}`]
				: undefined,
	}));
}
