import React from 'react';
import App from '../App';
import BlogPage from '../pages/BlogPage';
import BlogPostPage from '../pages/BlogPostPage';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import TermsPage from '../pages/TermsPage';
import LightFixturesPage from '../pages/LightFixturesPage';

const Router: React.FC = () => {
  const path = window.location.pathname;

  // Handle root path variations
  if (path === '/' || path === '/index.html') {
    return <App />;
  }

  // Services page
  if (path === '/services' || path === '/services/') {
    return <ServicesPage />;
  }

  // About page
  if (path === '/about' || path === '/about/') {
    return <AboutPage />;
  }

  // Terms page
  if (path === '/terms' || path === '/terms/') {
    return <TermsPage />;
  }

  // Light fixtures page
  if (path === '/light-fixtures' || path === '/light-fixtures/') {
    return <LightFixturesPage />;
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
