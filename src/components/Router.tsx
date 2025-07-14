import React from 'react';
import App from '../App';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';

const Router: React.FC = () => {
  const path = window.location.pathname;

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

  // Default route (e.g., home or anything else)
  return <App />;
};

export default Router;
