"use client";

import type { BlogPost } from "@/app/lib/blogPosts";
import { ArrowRight, Mail } from "lucide-react";

import { useState } from "react";

interface SidebarProps {
	recentPosts: BlogPost[];
}

const Sidebar = ({ recentPosts }: SidebarProps) => {
	const [email, setEmail] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Add actual newsletter subscription logic
		setIsSubscribed(true);
	};

	return (
		<div className="space-y-8">
			{/* Newsletter signup */}
			<div className="bg-gray-50 rounded-lg p-6">
				<h3 className="text-lg font-medium text-blog-primary mb-2">
					Subscribe to our newsletter
				</h3>
				<p className="text-blog-secondary text-sm mb-4">
					Get the latest moving tips and resources delivered to your inbox.
				</p>

				{isSubscribed ? (
					<div className="bg-green-50 text-green-700 p-3 rounded-lg text-sm animate-fade-in">
						Thanks for subscribing! Check your inbox soon.
					</div>
				) : (
					<form onSubmit={handleSubmit}>
						<div className="relative mb-3">
							<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
							<input
								type="email"
								className="w-full bg-white border border-gray-200 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blog-accent/20 focus:border-blog-accent/20 transition-all duration-300 pl-10"
								placeholder="Your email address"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blog-accent hover:bg-blog-accent/90 text-white rounded-lg py-2 text-sm font-medium transition-colors"
						>
							Subscribe
						</button>
					</form>
				)}
			</div>

			{/* Recent posts */}
			<div>
				<h3 className="text-lg font-medium text-blog-primary mb-4">
					Recent Posts
				</h3>
				<div className="space-y-4">
					{recentPosts.map((post) => (
						<div key={post.id} className="flex group">
							<div className="flex-shrink-0 h-16 w-16 rounded overflow-hidden">
								<img
									src={`${post.image}?w=100&h=100&fit=crop&q=80`}
									alt={post.title}
									className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
									loading="lazy"
								/>
							</div>
							<div className="ml-4">
								<h4 className="text-sm font-medium text-blog-primary group-hover:text-blog-accent transition-colors">
									<a href={`/post/${post.id}`}>{post.title}</a>
								</h4>
								<p className="text-xs text-gray-500 mt-1">{post.date}</p>
							</div>
						</div>
					))}
				</div>
				<a
					href="/"
					className=" text-blog-accent font-medium transition-colors hover:text-blog-accent/80 mt-4 inline-flex items-center text-sm"
				>
					View all posts <ArrowRight className="h-3.5 w-3.5 ml-1" />
				</a>
			</div>

			{/* Categories */}
			<div>
				<h3 className="text-lg font-medium text-blog-primary mb-4">
					Categories
				</h3>
				<ul className="space-y-2">
					<li>
						<a
							href="/"
							className="text-blog-secondary hover:text-blog-accent transition-colors text-sm"
						>
							Packing Tips
						</a>
					</li>
					<li>
						<a
							href="/"
							className="text-blog-secondary hover:text-blog-accent transition-colors text-sm"
						>
							Moving Checklist
						</a>
					</li>
					<li>
						<a
							href="/"
							className="text-blog-secondary hover:text-blog-accent transition-colors text-sm"
						>
							Cost-Saving
						</a>
					</li>
					<li>
						<a
							href="/"
							className="text-blog-secondary hover:text-blog-accent transition-colors text-sm"
						>
							Commercial Moves
						</a>
					</li>
					<li>
						<a
							href="/"
							className="text-blog-secondary hover:text-blog-accent transition-colors text-sm"
						>
							International
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
