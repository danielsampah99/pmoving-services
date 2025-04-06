"use client";
import type { BlogPost } from "@/app/(app)/lib/blogPosts";
import { ArrowRight } from "lucide-react";

interface PostCardProps {
	post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
	return (
		<div className="blog-card group h-full flex flex-col animate-fade-in">
			<div className="relative overflow-hidden h-48">
				<img
					src={`${post.image}?w=600&h=400&fit=crop&crop=focalpoint&q=80`}
					alt={post.title}
					className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					loading="lazy"
				/>
			</div>
			<div className="flex-1 p-5 flex flex-col">
				<div className="category-chip bg-gray-100 text-blog-secondary mb-3 self-start">
					{post.category
						.split("-")
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
						.join(" ")}
				</div>
				<h3 className="text-lg font-medium text-blog-primary mb-2 group-hover:text-blog-accent transition-colors">
					{post.title}
				</h3>
				<p className="text-blog-secondary text-sm mb-4 flex-grow">
					{post.excerpt}
				</p>
				<div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
					<div className="text-gray-500 text-xs">
						<span>{post.date}</span>
						<span className="mx-2">•</span>
						<span>{post.readTime} min read</span>
					</div>
					<a
						href={`/post/${post.id}`}
						className="inline-flex items-center text-blog-accent font-medium  hover:text-blog-accent/80 group-hover:translate-x-1 transition-transform duration-300"
					>
						Read <ArrowRight className="h-4 w-4 ml-1" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
