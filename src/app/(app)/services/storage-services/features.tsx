"use client";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/accordion";
import { cn } from "@/utils";
import { type FC, type ReactNode, useState } from "react";

export const StorageServicesFeatures = () => {
	return (
		<section className="mx-auto max-w-7xl px-4">
			<div className="border-x border-gray-400">

				<Heading />
			</div>
			<ContentGrid />
		</section>
	);
};

const Heading = () => {
	return (
		<div className="px-4 sm:px-7 lg:px-16">
			<div className="flex max-w-2xl flex-col gap-4 py-8 sm:gap-6 sm:py-10 lg:py-20">
				<h2 className="text-3xl font-medium sm:text-4xl md:text-5xl">
					Start with{" "}
					<span className="bg-linear-to-r from-moving-yellow to-moving-gray bg-clip-text text-transparent">
						confidence
					</span>
				</h2>
				<p className="max-w-xl text-base text-gray-500 sm:text-lg">
					Premium Moving & Storage delivers secure facilities, trained crews,
					and transparent pricing, without hidden access fees or unnecessary
					complications. Our focus is care, communication, and accountability
					from pickup to retrieval.
				</p>
			</div>
		</div>
	)
};

const ContentGrid = () => {
	return (
		<div className="grid grid-cols-1 border-t border-gray-400 md:grid-cols-2">
			<div className="border-r border-gray-400 p-5 sm:p-6">
				<div className="relative flex size-full items-end justify-end rounded-xl bg-moving-gray bg-cover">
					<img
						src="/api/media/file/Moving%20Services%20-%20Collage.webp"
						alt="Moving crew on a local move and storage"
						loading="eager"
						className="max-h-full w-auto object-contain pl-6 pt-6 sm:pl-12 sm:pt-12"
					/>
				</div>
			</div>

			<Features />
		</div>
	);
};

type Feature = {
	value: string;
	image: string;
	title: string;
	description: ReactNode;
};

const features: Array<Feature> = [
	{
		value: "storage-furniture",
		title: "Storage Furniture",
		image: "/storage-furniture.png",
		description: (
			<p>
				Maximizing space in small rooms starts with choosing the right storage
				furniture tailored to each area of your house. Whether you need a
				spacious wardrobe for your bedroom, a sleek bookcase for your living
				spaces, or wall-mounted shelves to create vertical storage, the right
				furniture can transform any room. Brands like{" "}
				<a href="https://www.ikea.com/" className="text-moving-yellow">IKEA</a> offer a wide range of storage
				options, including cabinets and display units, that not only help you
				organize your belongings but also showcase your favorite decorative
				items. By selecting functional storage furniture, you can refresh your
				home’s look, keep your space tidy, and ensure every item has its place.
				Thoughtfully chosen storage furniture makes it easy to create a more
				organized, beautiful, and functional living environment, no matter the
				size of your space.
			</p>
		),
	},
	{
		value: "eco",
		title: "Eco-Friendly Storage Solutions",
		image: "/eco-storage.png",
		description: (
			<p>
				Eco-friendly storage solutions are an excellent way to organize your
				home while caring for the environment. Opt for reusable storage bins,
				baskets, and boxes made from sustainable materials like bamboo, cotton,
				or recycled plastic to create functional storage that reduces waste.
				Repurposing or upcycling old crates, boxes, or furniture into unique
				storage containers is another creative way to conserve resources and add
				character to your space. These eco-friendly options are just as
				practical and stylish as traditional storage solutions, allowing you to
				organize your belongings while supporting a more sustainable lifestyle.
				By choosing green storage solutions, you can create a home that’s both
				organized and environmentally responsible.
			</p>
		),
	},
	{
		value: "local-expertise",
		title: "Local Expertise Protects Your Time & Property",
		image: "/moving-crew.png",
		description: (
			<div>
				<p className="font-semibold">
					Twin Cities storage services planned around real building access,
					traffic patterns, and neighborhood logistics.
				</p>
				<p>
					Storage is about more than square footage, it’s about execution.
					Serving Minneapolis, St. Paul and nearby cities require an
					understanding of elevator scheduling, parking limitations, loading
					restrictions, and historic building layouts.
				</p>

				<p>
					Our <a href="/services/local-moving" className="text-moving-yellow">local moving</a> crews plan each
					service around real-world conditions, reducing delays and preventing
					damage. With local facilities and experienced teams, you always know
					where your belongings are and how they’re being cared for.
				</p>
			</div>
		),
	},
];

type FeatureItemProps = {
	feature: Feature;
	isOpen: boolean;
};

const FeatureItem: FC<FeatureItemProps> = ({ feature, isOpen }) => {
	return (
		<AccordionItem
			value={feature.value}
			className={cn(
				"border-b transition-colors",
				isOpen && "border-t-2 border-t-moving-yellow",
			)}
		>
			<AccordionTrigger className="flex w-full cursor-pointer flex-col items-start rounded-none p-6 text-left hover:no-underline xl:p-12 [&>svg]:hidden">
				{isOpen ? (
					// ── Expanded ──
					<span className="flex w-full flex-col items-start gap-10 xl:gap-4">
						<img
							className=""
							height={32}
							width={32}
							alt={feature.title}
							src={feature.image}
							aria-hidden
						/>
						<span className="text-xl font-semibold text-foreground xl:text-2xl">
							{feature.title}
						</span>
					</span>
				) : (
					// ── Collapsed ──
					<span className="flex w-full items-center gap-3">
						<img
							className="size-6"
							height={32}
							width={32}
							alt={feature.title}
							src={feature.image}
							aria-hidden
						/>
						<span className="text-xl font-medium text-muted-foreground xl:text-2xl">
							{feature.title}
						</span>
					</span>
				)}
			</AccordionTrigger>

			<AccordionContent className="px-6 pb-6 pt-0 text-base text-justify w-full font-normal text-gray-500 [**>a]:text-moving-yellow xl:px-12 xl:pb-12">
				{feature.description}
			</AccordionContent>
		</AccordionItem>
	);
};

const Features = () => {
	const [openFeature, setOpenFeature] = useState(features[0].value);

	return (
		<Accordion
			type="single"
			collapsible={true}
			value={openFeature}
			onValueChange={(val: string) => setOpenFeature(val)}
			className="w-full"
		>
			{features.map((feat) => (
				<FeatureItem
					key={feat.value}
					feature={feat}
					isOpen={openFeature === feat.value}
				/>
			))}
		</Accordion>
	);
};
