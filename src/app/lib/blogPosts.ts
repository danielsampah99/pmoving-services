export interface BlogPost {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	category: string;
	image: string;
	author: string;
	date: string;
	featured: boolean;
	readTime: number;
}

export const categories = [
	{ id: "all", name: "All Posts" },
	{ id: "packing-tips", name: "Packing Tips" },
	{ id: "moving-checklist", name: "Moving Checklist" },
	{ id: "cost-saving", name: "Cost-Saving" },
	{ id: "commercial", name: "Commercial Moves" },
	{ id: "international", name: "International" },
];

export const blogPosts: BlogPost[] = [
	{
		id: 1,
		title: "The Ultimate Guide to Packing Fragile Items",
		excerpt:
			"Learn expert techniques for safely packing your most delicate belongings during a move.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "packing-tips",
		image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
		author: "Emily Johnson",
		date: "May 15, 2023",
		featured: true,
		readTime: 6,
	},
	{
		id: 2,
		title: "10 Ways to Cut Costs on Your Next Move",
		excerpt:
			"Discover proven strategies to save money without compromising on the quality of your moving experience.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "cost-saving",
		image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
		author: "David Wilson",
		date: "June 2, 2023",
		featured: true,
		readTime: 8,
	},
	{
		id: 3,
		title: "The Complete Moving Checklist: 8 Weeks Before Your Move",
		excerpt:
			"Start your moving journey right with our comprehensive checklist for two months before moving day.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "moving-checklist",
		image: "https://images.unsplash.com/photo-1540518614846-7eded433c457",
		author: "Sarah Martinez",
		date: "July 12, 2023",
		featured: false,
		readTime: 5,
	},
	{
		id: 4,
		title: "How to Safely Move Large Furniture Without Damage",
		excerpt:
			"Learn professional techniques for moving heavy furniture while protecting your items and your home.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "packing-tips",
		image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
		author: "Michael Thompson",
		date: "August 5, 2023",
		featured: true,
		readTime: 7,
	},
	{
		id: 5,
		title: "International Moving: Documents You'll Need",
		excerpt:
			"Navigate the complexities of international relocation with our guide to essential documentation.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "international",
		image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4",
		author: "Jennifer Lee",
		date: "September 18, 2023",
		featured: false,
		readTime: 9,
	},
	{
		id: 6,
		title: "Commercial Moving: Minimizing Business Downtime",
		excerpt:
			"Keep your business operations running smoothly during relocation with these expert strategies.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "commercial",
		image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
		author: "Robert Chen",
		date: "October 7, 2023",
		featured: false,
		readTime: 10,
	},
	{
		id: 7,
		title: "5 Essential Packing Supplies You Shouldn't Skip",
		excerpt:
			"Make sure you have all the necessary materials for a smooth packing experience with our guide.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "packing-tips",
		image: "https://images.unsplash.com/photo-1577705998148-6da4f3963bc8",
		author: "Lisa Patel",
		date: "November 11, 2023",
		featured: false,
		readTime: 4,
	},
	{
		id: 8,
		title: "How to Change Your Address: A Complete Guide",
		excerpt:
			"Don't miss any important mail after your move with our comprehensive address change checklist.",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.",
		category: "moving-checklist",
		image: "https://images.unsplash.com/photo-1568607689150-2b8d2db8b7c1",
		author: "Thomas Wright",
		date: "December 29, 2023",
		featured: false,
		readTime: 6,
	},
];
