import { getBlogs } from "@/data/blogs";
import { Hero } from "./hero";
import { AllPosts } from "./all-posts";
import type { Metadata } from "next";
import { BASE_URL } from "@/utils";


export const metadata: Metadata = {
	title: "Moving Tips, Guides and Costs | Premium Moving Services Blog",
	description:
		"Read everything essential about expert tips, cost breakdowns, checklists and advice for the local and long distance moves",
	keywords: [
		"moving services",
		"moving tips",
		"packing tips",
		"relocation advice",
		"professional movers",
		"moving checklist",
		"moving blog"
	],
	openGraph: {
		title: "Moving Tips, Guides and Costs | Premium Moving Services Blog",
		description:
			"Read everything essential about expert tips, cost breakdowns, checklists and advice for the local and long distance moves",
		url: `${BASE_URL}/blogs`,
		type: "website",
		images: [
			{
				url: `${BASE_URL}/logo.svg`,
				width: 1200,
				height: 630,
				alt: "Moving Services Blog"
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Moving Tips, Guides and Costs | Premium Moving Services Blog",
		description:
			"Read everything essential about expert tips, cost breakdowns, checklists and advice for the local and long distance moves",
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
