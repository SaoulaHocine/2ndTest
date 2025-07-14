import React from 'react';
import App from '../App';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';

const Router: React.FC = () => {
  const path = window.location.pathname;
  
  // Handle blog routes
  if (path === '/blog' || path === '/blog/') {
    return <BlogPage />;
  }
  
  // Blog post route
  if (path.startsWith('/blog/')) {
    const postId = path.replace('/blog/', '');
    // Don't render blog post page if it's just the blog index
    if (postId && postId !== 'index') {
      return <BlogPostPage postId={postId} />;
    }
    return <BlogPage />;
  }
  
  // Default home route and all other routes
  return <App />;
};

export default Router;
    return <BlogPostPage postId={postId} />;
  }
  
  // Blog listing route
  if (path === '/blog') {
    return <BlogPage />;
  }
  
  // Default home route
  return <App />;
};

export default Router;