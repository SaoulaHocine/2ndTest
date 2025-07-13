import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import BlogCard from './BlogCard';
import { websiteConfig } from '../config/websiteData';

const BlogSection = () => {
  // Show only the 3 most recent blog posts
  const recentPosts = websiteConfig.blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900/30 rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-blue-400" />
          </div>
          <h2 className="text-4xl font-bold text-white">Latest from Our Blog</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed with expert tips, guides, and insights about handyman services, 
            home maintenance, and repair costs in Greeley, Colorado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;