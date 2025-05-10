import { getBlogs } from "@/data/blogs";
import { Hero } from "./hero";
import { AllPosts } from "./all-posts";
import { Metadata } from "next";
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: "Premium Moving Services Blogs - Tips, Tricks, and Advice",
	description:
		"Stay updated with the latest trends, tips, and advice in the moving industry. Our blog covers everything from packing hacks to choosing the right mover.",
	keywords: [
		"moving services",
		"moving tips",
		"packing tips",
		"relocation advice",
		"professional movers",
		"moving checklist",
	],
	openGraph: {
		title: "Moving Services Blogs - Tips, Tricks, and Advice",
		description:
			"Stay updated with the latest trends, tips, and advice in the moving industry. Our blog covers everything from packing hacks to choosing the right mover.",
		url: BASE_URL,
		type: "website",
		images: [
			{
				url: `${BASE_URL}/logo.svg`,
				width: 1200,
				height: 630,
				alt: "Moving Services Blog",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Moving Services Blogs - Tips, Tricks, and Advice",
		description:
			"Stay updated with the latest trends, tips, and advice in the moving industry. Our blog covers everything from packing hacks to choosing the right mover.",
		images: [`${BASE_URL}/logo.svg`],
	},
};

const BlogsPage = async () => {
	const blogs = await getBlogs();

	return (
		<section className="">
			<div className="xl:p-6">
				<Hero post={blogs.docs[0]} />
			</div>

			<div className="py-10 px-4 bg-gray-50">
				<AllPosts posts={blogs.docs} />
			</div>
		</section>
	);
};

export default BlogsPage;
