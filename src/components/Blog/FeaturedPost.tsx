'use client'
import { BlogPost } from '@/app/lib/blogPosts';
import { ArrowRight } from 'lucide-react';

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="group relative h-[600px] rounded-xl overflow-hidden animate-scale-in">
      {/* Darker overlay to prevent lightening effect */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <img 
        src={`${post.image}?w=1200&h=500&fit=crop&crop=focalpoint&q=80`}
        alt={post.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-100"
        loading="lazy"
      />
      
      <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full z-20">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors bg-background text-white mb-4">
          {post.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-3">
          {post.title}
        </h2>
        <p className="text-white/90 mb-4 max-w-2xl">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-white/80 text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} min read</span>
          </div>
          <a href={`/post/${post.id}`} className=" text-blog-accent font-medium  hover:text-blog-accent/80 text-white group-hover:translate-x-1 transition-transform duration-300 flex items-center">
            Read more <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
