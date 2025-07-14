// pages/blog/[postId].tsx
import BlogPostPage from '../../components/BlogPostPage';

const BlogPost = ({ postId }: { postId: string }) => {
  return <BlogPostPage postId={postId} />;
};

export async function getServerSideProps(context: any) {
  const { postId } = context.params;
  return {
    props: {
      postId,
    },
  };
}

export default BlogPost;
