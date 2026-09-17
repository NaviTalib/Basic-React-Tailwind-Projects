import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';

export default function BlogPost() {
  const { postId } = useParams(); // Grabs the :postId from the URL
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="page">
        <h2>Blog post not found!</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{post.title}</h1>
      <p style={{ fontStyle: 'italic', color: '#666' }}>Post ID: {postId}</p>
      <p>Here is the full content of the blog post. This is where you would normally fetch markdown or CMS data for post <strong>{postId}</strong>.</p>
      <br />
      <Link to="/blog">&larr; Back to all posts</Link>
    </div>
  );
}