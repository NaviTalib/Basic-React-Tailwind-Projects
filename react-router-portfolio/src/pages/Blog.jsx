import { Link } from 'react-router-dom';

// Simulated blog data
export const blogPosts = [
  { id: '1', title: 'Understanding React Router v6', snippet: 'Learn how to handle routing like a pro...' },
  { id: '2', title: 'Why Vite is Faster than CRA', snippet: 'Discover the build tool powering modern React apps...' },
  { id: '3', title: 'CSS Modules vs Tailwind', snippet: 'Comparing popular styling approaches in React...' },
];

export default function Blog() {
  return (
    <div className="page">
      <h1>Developer Blog</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <article key={post.id} style={{ marginBottom: '1.5rem' }}>
            <h3>
              <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </h3>
            <p>{post.snippet}</p>
          </article>
        ))}
      </div>
    </div>
  );
}