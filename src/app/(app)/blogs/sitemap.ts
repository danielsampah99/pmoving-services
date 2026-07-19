import { getBlogs } from "@/data/blogs";
import { BASE_URL } from "@/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const blogs = await getBlogs();

	return blogs.docs.map((blog) => ({
		url: `${BASE_URL}/blogs/${encodeURIComponent(blog.slug)}`,
		lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
		changeFrequency: "weekly",
		priority: 1,
		images:
			typeof blog.thumbnail === "object" && blog.thumbnail?.thumbnailURL
				? [`${BASE_URL}${blog.thumbnail.thumbnailURL}`]
				: undefined,
	}));
}
