import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
}

interface BlogCardProps {
  post: BlogPost;
  onClick?: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = `/blog/${post.id}`;
    }
  };

  return (
    <article className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:bg-gray-750 border border-gray-700 group cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-300 line-clamp-3">
          {post.excerpt}
        </p>
        
        <button
          onClick={handleClick}
          className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};

export default BlogCard;