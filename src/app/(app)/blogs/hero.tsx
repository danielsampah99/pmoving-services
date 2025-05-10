"use client";

import { Blog } from "@/payload-types";
import { FC } from "react";

export type HeroProps = {
	post: Blog;
};

export const Hero: FC<HeroProps> = ({ post }) => {
	return (
		<div className="group relative h-[600px] sm:rounded-t-none xl:rounded-xl overflow-hidden animate-scale-in">
			{/* Darker overlay to prevent lightening effect */}
			<div className="absolute inset-0 bg-black/30 z-10" />

			{/* `${post.}` */}
			<img
				src={
					typeof post.thumbnail === "object" && post.thumbnail.url
						? post.thumbnail.url
						: ""
				}
				alt={typeof post.thumbnail === "object" ? post.thumbnail.alt : ""}
				className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
				loading="lazy"
			/>

			<div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full z-20">
				<div className="inline-block px-3 py-1 rounded-full text-xs shadow-sm font-semibold transition-colors bg-moving-yellow selection-none text-white mb-4">
					{Array.isArray(post.tags) && post.tags.length > 0
						? post.tags[0].replaceAll("-", " ")
						: "Latest"}
				</div>
				<a
					href={`/blogs/${post.slug}`}
					className="text-2xl block capitalize sm:text-3xl md:text-4xl font-medium text-white mb-3 group-hover:underline hover:text-moving-yellow hover:underline transition-colors delay-150 duration-300"
				>
					{post.title}
				</a>
				<p className="text-white/90 mb-4 max-w-2xl text-justify text-ellipsis">
					{post.thumbnailDescription}
				</p>
				<div className="flex items-center justify-between">
					<div className="text-white/80 text-sm font-semibold">
						<span className="">
							{new Intl.DateTimeFormat("en-US", {
								day: "numeric",
								month: "long",
								year: "numeric",
							}).format(new Date(post.publishedDate)) ?? ""}
						</span>
						<span className="mx-2">&middot;</span>
						<span>{post.readingTime ?? 6} minutes</span>
					</div>
				</div>
			</div>
		</div>
	);
};
