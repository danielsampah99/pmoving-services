"use client";

import { Blog } from "@/payload-types";
import { type FC, useCallback, useState } from "react";
import { SearchPosts } from "./search-posts";
import { CategoryList } from "./cateogories";

export type AllPostsProps = {
	posts: Blog[];
};

export const AllPosts: FC<AllPostsProps> = ({ posts }) => {
	const [displayedPosts, setDisplayedPosts] = useState(posts);

	const handleSearch = (searchTerm: string) => {

		const lowerCaseSearchTerm = searchTerm.toLowerCase().trim()

		if (lowerCaseSearchTerm === '') {
			setDisplayedPosts(posts)
		} else {
			const filteredPosts = posts.filter((post) => {
				const titleMatch = post.title.toLowerCase().includes(lowerCaseSearchTerm)

				const tagsMatch = post.tags && post.tags.some(tag => tag.toLowerCase().replaceAll('-', ' ').includes(lowerCaseSearchTerm))

				const descriptionMatch  = post.thumbnailDescription && post.thumbnailDescription.toLowerCase().includes(lowerCaseSearchTerm)

				return titleMatch || tagsMatch || descriptionMatch
			})

			setDisplayedPosts(filteredPosts)
		}
	}

	return (
		<div className="flex flex-col gap-x-8 items-center justify-between">
			{/* heading */}
			<div className="w-full flex lg:items-center justify-between flex-col gap-y-6">
				<h2>Our Moving Services Blogs</h2>

				<SearchPosts onSearch={handleSearch} />
			</div>

			<div>
				{/* <CategoryList categories={[]} activeCategory="all" onCategoryChange={handleSearch} /> */}
			</div>

			<div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
				{displayedPosts.map((post) => (
					<Post post={post} key={post.id} />
				))}
			</div>


		</div>
	);
};

export const Post: FC<{ post: Blog }> = ({ post }) => {
	return (
		<div>
			<div className="relative">
				<div className="relative h-72 w-full overflow-hidden rounded-lg">
					<img
						alt={
							typeof post.thumbnail === "object"
								? post.thumbnail.alt
								: "post thumbnail"
						}
						src={
							typeof post.thumbnail === "object" && post.thumbnail.url
								? post.thumbnail.url
								: ""
						}
						className="h-full w-full object-cover object-center"
					/>
				</div>
				<div className="relative mt-4">
					<h3 className="text-sm font-medium capitalize truncate text-gray-900">
						{post.title}
					</h3>
					<p className="mt-1 text-sm truncate text-gray-500">
						{post.thumbnailDescription ?? ""}
					</p>
				</div>
				<div className="group absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
					<div
						aria-hidden="true"
						className="absolute inset-x-0 bottom-0 h-36 group-hover:bg-gradient-to-t transition-all group-hover:animate-ease-in-out duration-150 delay-200 hover:bg-gradient-to-t from-black opacity-50"
					/>
					<p className="relative rounded-full px-1.5 py-0.5 bg-moving-yellow shadow-sm text-sm font-semibold text-white">
						{post.readingTime ?? 5} min
					</p>
				</div>
			</div>
			<div className="mt-6">
				<a
					href={post.slug}
					className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
				>
					Read<span className="sr-only">, {post.title}</span>
				</a>
			</div>
		</div>
	);
};
