import { getBlogs } from "@/data/blogs";
import { getServiceAreas } from "@/data/service-areas";
import { BASE_URL } from "@/utils";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const blogs = await getBlogs();

	const serviceAreas = await getServiceAreas();

	return [
		{
			url: "https://pmovingservices.com",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
			images: ["https://pmovingservices.com/logo.png"],
			videos: [
				{
					title: "Premium Moving Services Crew Packing",
					thumbnail_loc: "https://pmovingservices.com/hero-video-thumnail.png",
					description:
						"Need trusted movers in Minnesota? Our professional moving company specializes in local and long-distance moves, making relocation easy and stress-free. From packing and loading to safe transportation and unpacking, our experienced Minnesota movers handle every step with care. Whether you’re moving your home or business, we provide affordable, reliable, and friendly moving services across the state. Choose the Minnesota moving company that puts your needs first",
					content_loc: "https://pmovingservices.com/hero-video.mov",
					family_friendly: "yes",
					duration: 27,
				},
			],
		},
		{
			url: "https://pmovingservices.com/free-quote",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: `${BASE_URL}/affiliates`,
			lastModified: new Date(),
			priority: 0.9,
			images: [`${BASE_URL}/next-home-logo.webp`]
		},
		{
			url: `${BASE_URL}/careers`,
			lastModified: new Date(),
			priority: 0.9,
			images: [`${BASE_URL}/api/media/file/Deshun%20and%20Drake.webpp`]
		},
		{
			url: `${BASE_URL}/contact-us`,
			lastModified: new Date(),
			priority: 0.9,
			images: [`${BASE_URL}/next-home-logo.webp`]
		},
		{
			url: `${BASE_URL}/gallery`,
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: `${BASE_URL}/blogs`,
			lastModified: new Date(),
			priority: 0.9,
		},
		...(blogs.docs.map(blog => ({
			url: `${BASE_URL}/blogs/${encodeURIComponent(blog.slug)}`,
			lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
			changeFrequency: 'weekly',
			priority: 1,
			images:
				typeof blog.thumbnail === "object" && blog.thumbnail?.thumbnailURL
					? [`${BASE_URL}${blog.thumbnail.thumbnailURL}`]
					: undefined
		})) as MetadataRoute.Sitemap),
		{
			url: `${BASE_URL}/services`,
			lastModified: new Date(),
			priority: 0.9,
			images: [`${BASE_URL}/next-home-logo.webp`]
		},
		{
			url: `${BASE_URL}/services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1.0,
		},
		{
			url: `${BASE_URL}/services/residential-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/international-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/junk-removal`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/logistics-services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/packing-supplies`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/piano-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/local-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/services/local-moving/apartment-movers`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/local-moving/condo-movers`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/local-moving/hoa-movers`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/local-moving/household`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/local-moving/pack-and-unpack`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/local-moving/residential-movers`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/long-distance-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/services/long-distance-moving/employee-relocation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/long-distance-moving/interstate-moving-specialists`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/long-distance-moving/long-distance-commercial`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/long-distance-moving/long-distance-residential`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/commercial-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/services/commercial-moving/corporate-relocation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/commercial-moving/office-movers`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/commercial-moving/retail-relocation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/commercial-moving/small-business-movers`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/commercial-moving/warehouse-industrial`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/corporate-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/services/specialty-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/services/specialty-moving/antique-furniture`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/specialty-moving/furniture-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/specialty-moving/gun-and-safe-moving`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/specialty-moving/labor-only`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/specialty-moving/load-and-unloading`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${BASE_URL}/services/specialty-moving/senior-relocation`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},

		{
			url: `${BASE_URL}/services/storage-services`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},

		{
			url: `${BASE_URL}/service-areas`,
			lastModified: new Date(),
			priority: 0.9
		},
		...(serviceAreas.docs.map((area) => ({
			url: `${BASE_URL}/service-areas/${area.slug}`,
			lastModified: area.updatedAt,
			priority: 1,
			changeFrequency: 'monthly',
			images:
				typeof area.mapImage === "object"
					? [`${BASE_URL}${area.mapImage?.url}`]
					: undefined,
		})) as MetadataRoute.Sitemap),
		{
			url: `${BASE_URL}/privacy-policy`,
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: `${BASE_URL}/referral-program`,
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: `${BASE_URL}/terms-and-conditions`,
			lastModified: new Date(),
			priority: 0.9
		},
		{
			url: `${BASE_URL}/thank-you`,
			lastModified: new Date(),
			priority: 0.9
		},
	];
}
