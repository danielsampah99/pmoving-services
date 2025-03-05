'use client'
import { blogPosts } from '@/app/lib/blogPosts';
import React from 'react'
import { useState, useEffect } from 'react';
import FeaturedPost from './FeaturedPost';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PostGrid from './PostGrid';
import Sidebar from './Sidebar';
import { div } from 'motion/react-client';
import Footer from '../Footer';

const BlogComponent = () => {
    const [displayedPosts, setDisplayedPosts] = useState(blogPosts);
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const featuredPosts = blogPosts.filter(post => post.featured);
    const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

    useEffect(() => {
        let filtered = [...blogPosts];

        // Filter by category
        if (activeCategory !== 'all') {
            filtered = filtered.filter(post => post.category === activeCategory);
        }

        // Filter by search
        if (searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                post =>
                    post.title.toLowerCase().includes(query) ||
                    post.excerpt.toLowerCase().includes(query) ||
                    post.content.toLowerCase().includes(query)
            );
        }

        setDisplayedPosts(filtered);
    }, [activeCategory, searchQuery]);

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    return (
        <div>

            <main className="flex-grow m-5">
                <section className=" pb-12">
                    <div className="blog-container">
                        {featuredPosts.length > 0 && <FeaturedPost post={featuredPosts[0]} />}
                    </div>
                </section>

                <section className="py-12 bg-gray-50">
                    <div className="blog-container">
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Main content */}
                            <div className="w-full lg:w-2/3">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                                    <h2 className="text-2xl font-medium text-blog-primary">Latest Articles</h2>

                                    <div className="w-full md:w-1/2 lg:w-2/5">
                                        <SearchBar onSearch={handleSearch} />
                                    </div>
                                </div>

                                <div className="mb-8">
                                    <CategoryFilter
                                        activeCategory={activeCategory}
                                        onCategoryChange={handleCategoryChange}
                                    />
                                </div>

                                <PostGrid posts={displayedPosts} />
                            </div>

                            {/* Sidebar */}
                            <div className="w-full lg:w-1/3">
                                <Sidebar recentPosts={recentPosts} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default BlogComponent