"use client";

import type { BlogPost } from "@/app/lib/blogPosts";
import PostCard from "./PostCard";

interface PostGridProps {
	posts: BlogPost[];
}

const PostGrid = ({ posts }: PostGridProps) => {
	if (posts.length === 0) {
		return (
			<div className="text-center py-16">
				<h3 className="text-xl font-medium text-blog-primary mb-2">
					No posts found
				</h3>
				<p className="text-blog-secondary">
					Try adjusting your search or filter criteria.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{posts.map((post) => (
				<PostCard key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostGrid;
