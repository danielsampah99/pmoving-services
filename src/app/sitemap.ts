import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
	];
}
