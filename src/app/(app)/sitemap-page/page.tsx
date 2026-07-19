import { Fragment } from "react";
import Link from "next/link";
import { getBlogs } from "@/data/blogs";
import { BlogIcon } from "@/components/icons/blog-icon";
import { getServiceAreas } from "@/data/service-areas";
import { GoogleMapsIcon } from "@/components/icons/google-maps-icon";

const services = [
	{
		id: 1,
		title: "Local Moving",
		href: "/services/local-moving",
	},
	{
		id: 2,
		title: "Packing Services",
		href: "/services/local-moving/pack-and-unpack",
	},
	{
		id: 3,
		title: "Long Distance Moving",
		href: "/services/long-distance-moving",
	},
	{
		id: 4,
		title: "Moving Labor",
		href: "/services/specialty-moving/labor-only",
	},
	{
		id: 5,
		title: "Storage Services",
		href: "/services/storage-services",
	},
	{
		id: 6,
		title: "Residential Moving",
		href: "/services/local-moving/residential-movers",
	},
	{
		id: 7,
		title: "Corporate Moving",
		href: "/services/commercial-moving/corporate-relocation",
	},
	{
		id: 8,
		title: "Apartment Moving",
		href: "/services/local-moving/apartment-movers",
	},
	{
		id: 9,
		title: "Packing Supplies",
		href: "/services/packing-supplies",
	},
	{
		id: 10,
		title: "Safes & Gun safes",
		href: "/services/specialty-moving/gun-and-safe-moving",
	},
	{
		id: 11,
		title: "Pianos",
		href: "/services/piano-moving",
	},
	{
		id: 12,
		title: "Junk Removal",
		href: "/services/junk-removal",
	},
	{
		id: 13,
		title: "International Move",
		href: "/services/international-moving",
	},
	{
		id: 14,
		title: "Logistics Services",
		href: "/services/logistics-services",
	},
	{
		id: 15,
		title: "Specialty Moving",
		href: "/services/specialty-moving",
	},
];

export default async function SitemapPage() {
	const [blogs, serviceAreas] = await Promise.all([
		await getBlogs(),
		await getServiceAreas(),
	]);

	return (
		<Fragment>
			<main className="p-4 isolate lg:px-8 mx-auto relative bg-white">
				<h1 className="py-10 text-gray-800 inline-flex items-center w-full my-4 text-2xl font-bold">
					Sitemap
				</h1>

				<div className="">
					<h2 className="text-base underline font-semibold">Services</h2>
					<ol className="mt-2 text-gray-700 font-normal grid grid-cols-2 text-sm gap-y-0.5">
						{Array.isArray(services) &&
							services.map((serv, servIdx) => (
								<Link key={serv.id} href={serv.href} className="block">
									{servIdx}. {serv.title}
								</Link>
							))}
					</ol>
				</div>

				<div>
					<div className="inline-flex items-center w-full my-4 text-2xl font-bold">
						<span className="underline">Blogs</span>
						<BlogIcon className="size-8 ml-4" />
					</div>

					<ol className="mt-2 text-gray-700 font-normal grid text-sm gap-y-0.5">
						{Array.isArray(blogs.docs) &&
							blogs.docs.map((doc, docIdx) => (
								<Link
									key={doc.id}
									href={`/blogs/${doc.slug}`}
									className="block capitalize hover:underline"
								>
									{docIdx + 1}. {doc.title?.toLowerCase()}
								</Link>
							))}
					</ol>
				</div>

				<div>
					<div className="inline-flex items-center w-full my-4 text-2xl font-bold">
						<span className="underline">Service Areas</span>
						<GoogleMapsIcon className="size-8 ml-4" />
					</div>

					<ol className="mt-2 text-gray-700 font-normal grid text-sm gap-y-0.5">
						{Array.isArray(serviceAreas.docs) &&
							serviceAreas.docs.map((sa, saIdx) => (
								<Link
									key={sa.id}
									href={`/service-areas/${sa.slug}`}
									className="block capitalize hover:underline"
								>
									{saIdx + 1}. {sa.title?.toLowerCase()}
								</Link>
							))}
					</ol>
				</div>
			</main>
		</Fragment>
	);
}
