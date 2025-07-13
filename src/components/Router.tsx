import React from 'react';
import App from '../App';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';

const Router: React.FC = () => {
  const path = window.location.pathname;
  
  // Blog post route
  if (path.startsWith('/blog/')) {
    const postId = path.replace('/blog/', '');
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