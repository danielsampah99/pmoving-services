import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
	slug: "blogs",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			required: true,
			label: "Blog Title",
			type: "text",
			admin: {
				placeholder: "Title of the blog post",
				description:
					"The title of the blog post. This is shown on the all blogs page and the page rendering/displaying the blog post.",
			},
		},
		{
			name: "slug",
			type: "text",
			required: true,
			label: "Slug",
			unique: true,
			admin: {
				readOnly: true,
				description:
					"The slug is th unique text used to identify each blog post. It most likely should be the same as the title with but in lower case and the spaces replaced with dashes",
			},
		},
		{
			name: "content",
			label: "Content",
			required: true,
			type: "richText",
			admin: {
				description:
					"The actual content of the blog. Images, links, and lists can be included",
			},
		},
		{
			name: "tags",
			label: "Tags",
			type: "text",
			hasMany: true,
			admin: {
				description:
					"These tags will used for Search Engine Optimization and categorization of the blogs when being crawled and indexed by google or other web services",
			},
		},
		{
			name: "publishedDate",
			label: "Published Date",
			type: "date",
			required: true,
			admin: {
				description:
					"The date this blog will be posted/published. The date is also available to readers of blogs",
				date: {
					pickerAppearance: "dayOnly",
					displayFormat: "MM/DD/YYYY",
				},
			},
		},
		{
			name: "thumbnail",
			label: "Blog's Thumbnail",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "thumbnailDescription",
			label: "Blog's Description",
			type: "select",
			options: [
				{ label: "Draft", value: "draft" },
				{ label: "Scheduled", value: "scheduled" },
				{ label: "Publisshed", value: "published" },
			],
			admin: {
				position: "sidebar",
			},
		},
	],
	hooks: {
		beforeValidate: [
			({ data }) => {
				if (data?.title && !data?.slug) {
					data.slug = data?.title.toLowerCase().replace(" ", "-");
				}
				return data;
			},
		],
	},
};
