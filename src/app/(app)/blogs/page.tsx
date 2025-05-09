import { getBlogs } from "@/data/blogs";
import { Hero } from "./hero";

const BlogsPage = async () => {
	const blogs = await getBlogs();

	return (
		<section className=''>
			<div className='xl:p-6'>
				<Hero post={blogs.docs[0]} />
			</div>
		</section>
	)
};

export default BlogsPage;
