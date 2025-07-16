import React from 'react';
import App from '../App';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';

const Router: React.FC = () => {
  const path = window.location.pathname;

  // Handle root path variations
  if (path === '/' || path === '/index.html') {
    return <App />;
  }

  // Blog listing route
  if (path === '/blog' || path === '/blog/') {
    return <BlogPage />;
  }

  // Individual blog post route
  if (path.startsWith('/blog/')) {
    const postId = path.replace('/blog/', '');
    if (postId && postId !== 'index') {
      return <BlogPostPage postId={postId} />;
    }
    return <BlogPage />;
  }

  // Default route - fallback to home
  return <App />;
};

export default Router;
