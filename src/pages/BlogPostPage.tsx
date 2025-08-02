import React from 'react';
import { ArrowLeft, Calendar, Clock, Phone, Share2, Tag, Check } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { websiteConfig } from '../config/websiteData';

interface BlogPostPageProps {
  postId: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ postId }) => {
  const post = websiteConfig.blogPosts.find(p => p.id === postId);
  const relatedPosts = websiteConfig.blogPosts.filter(p => p.id !== postId).slice(0, 3);
  const [shareSuccess, setShareSuccess] = React.useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <a href="/blog" className="text-blue-400 hover:text-blue-300">← Back to Blog</a>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${postId}`;
    
    try {
      await navigator.clipboard.writeText(url);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 2000);
    }
  };

  // Convert markdown-style content to HTML-like structure
  const formatContent = (content: string) => {
    return content
      .split('\n\n')
      .map((paragraph, index) => {
        if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
        }
        if (paragraph.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
        }
        // Handle bold text as subtitles
        if (paragraph.includes('**')) {
          const parts = paragraph.split(/\*\*(.*?)\*\*/g);
          return (
            <div key={index} className="my-4">
              {parts.map((part, partIndex) => {
                if (partIndex % 2 === 1) {
                  // This is the content between **
                  return <strong key={partIndex} className="text-white font-semibold">{part}</strong>;
                } else if (part.trim()) {
                  // This is regular text
                  return <p key={partIndex} className="text-gray-300 leading-relaxed">{part}</p>;
                }
                return null;
              })}
            </div>
          );
        }
        // Handle lists starting with - 
        if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
          const items = paragraph.split('\n').filter(item => item.trim().startsWith('- '));
          const beforeList = paragraph.split('\n- ')[0];
          return (
            <div key={index} className="my-4">
              {beforeList && beforeList.trim() && (
                <p className="text-gray-300 leading-relaxed mb-3">{beforeList}</p>
              )}
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item.replace('- ', '')}</li>
                ))}
              </ul>
            </div>
          );
        }
        if (paragraph.includes('|')) {
          // Simple table rendering
          const rows = paragraph.split('\n').filter(row => row.trim() && !row.includes('---'));
          return (
            <div key={index} className="overflow-x-auto my-6">
              <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
                <tbody>
                  {rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-700' : 'border-t border-gray-700'}>
                      {row.split('|').filter(cell => cell.trim()).map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-4 py-3 ${rowIndex === 0 ? 'font-semibold text-white' : 'text-gray-300'}`}>
                          {cell.trim()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        // Handle regular paragraphs
        if (paragraph.trim()) {
          return <p key={index} className="text-gray-300 leading-relaxed mb-4">{paragraph}</p>;
        }
        return null;
      });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900 shadow-lg sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/blog" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Blog</span>
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-500 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Professional Handyman Services?
          </h2>
          <p className="text-blue-100 mb-6">
            Get a free estimate for your home repair project in Greeley, Colorado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={websiteConfig.contact.phoneLink}
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call: {websiteConfig.contact.phone}</span>
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
              >
                {shareSuccess ? (
                  <>
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </>
                )}
              </button>
            </div>

            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Tag className="h-5 w-5" />
                <span>Tags:</span>
              </div>
              {post.seo.keywords.split(', ').map((keyword, index) => (
                <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>
          </footer>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section id="contact" className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Home Improvement Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact {websiteConfig.business.name} today for professional handyman services in Greeley, Colorado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={websiteConfig.contact.phoneLink}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Now: {websiteConfig.contact.phone}</span>
            </a>
            <a
              href={websiteConfig.contact.emailLink}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;