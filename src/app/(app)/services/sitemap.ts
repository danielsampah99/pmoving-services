import { getBlogs } from "@/data/blogs";
import { getServiceAreas } from "@/data/service-areas";
import { services } from "@/data/services";
import { BASE_URL } from "@/utils";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
	return services.map((service) => ({ id: service.href }));
}

export default async function sitemap({
	slug,
}: { slug: string }): Promise<MetadataRoute.Sitemap> {
	return services.map((service) => ({
		url: `${BASE_URL}/${service.href}`,
		lastModified: new Date(),
	}));
}
