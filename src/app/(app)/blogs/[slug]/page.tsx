import { getPayload } from "payload";
import config from "@payload-config";
import { OurLocations } from "@/components/OurLocations";

import type { Metadata } from "next";
import type { Blog } from "@/payload-types";
import { BASE_URL, COMPANY } from "@/utils";
import { Post } from "./post";
import { notFound } from "next/navigation";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;

	const payload = await getPayload({ config });

	const blog = (
		await payload.find({
			collection: "blogs",
			where: { slug: { equals: decodeURIComponent(slug) } },
			limit: 1,
		})
	).docs[0] as Blog;

	if (!blog) {
		return {
			title: "Sorry! This blog does not exist",
			description:
				"We couldn't find the blog post you were looking for. It might have been moved, deleted, or the link might be incorrect. Please check the URL or try searching our site.",
		};
	}

	const canonicalUrl = `${BASE_URL}/blogs/${slug}`;

	// og-image / twitter card image
	let imageUrl = "";
	if (typeof blog.thumbnail === "object" && blog.thumbnail !== null) {
		imageUrl = blog.thumbnail.url || "";
	}

	const title = blog.title;

	const description = blog.thumbnailDescription
		? `${blog.thumbnailDescription.substring(0, 155)}...`
		: `Read our latest blog post titled "${title}" on the "Premium Moving Services blog". Find useful information and tips.`;

	const keywords = [
		...(Array.isArray(blog.tags) ? blog.tags : []),
		`${blog.title}`,
		`movers in ${blog.title}`,
		"moving services",
		"professional movers",
		"local movers",
		"residential moving",
		"commercial moving",
	];

	return {
		title,
		description,
		authors: [{ name: COMPANY, url: BASE_URL }],
		applicationName: COMPANY,
		referrer: "origin-when-cross-origin",
		creator: COMPANY,
		publisher: COMPANY,
		keywords,
		alternates: {
			canonical: canonicalUrl,
		},
		openGraph: {
			type: "website",
			title,
			description,
			locale: "en_US",
			images: [
				{ url: imageUrl, width: 1200, height: 630, alt: `${title} thumbnail` },
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			creatorId: "info@pmovingservices.com",
			site: "info@pmovingservices.com",
			images: [
				{ url: imageUrl, width: 1200, height: 630, alt: `${title} thumbnail` },
			],
		},
		robots: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	};
}

export default async function SingleBlogPage({ params }: Props) {
	const resolvedParams = await params;

	const slug = decodeURIComponent(resolvedParams.slug);

	const payload = await getPayload({ config });

	const blog = (
		await payload.find({
			collection: "blogs",
			where: { slug: { contains: slug } },
			limit: 1,
		})
	).docs[0] as Blog;

	if (!blog) {
		return notFound();
	}

	return (
		<section className="max-w-7xl w-full mx-auto p-6 mt-3 lg:px-8 pt-0 xl:pt-6">
			<Post content={blog?.content} id={blog.id} />
			<OurLocations />
		</section>
	);
}
