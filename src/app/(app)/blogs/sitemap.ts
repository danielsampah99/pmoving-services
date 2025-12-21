import { getBlogs } from "@/data/blogs";
import { BASE_URL } from "@/utils";
import { MetadataRoute } from "next";

export async function generateSitemaps() {
	const blogs = await getBlogs();

	return blogs.docs.map((blog) => ({ id: blog.slug }));
}

export default async function sitemap({
	slug,
}: { slug: string }): Promise<MetadataRoute.Sitemap> {
	const blogs = await getBlogs();

	return blogs.docs.map((blog) => ({
		url: `${BASE_URL}/blogs/${slug}`,
		lastModified: blog.updatedAt,
		images:
			typeof blog.thumbnail === "object"
				? [`${BASE_URL}/${blog.thumbnail.thumbnailURL}`]
				: undefined,
	}));
}
