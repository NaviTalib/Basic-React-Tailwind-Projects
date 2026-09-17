import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate } from 'react-router';

// ==========================================
// 1. DUMMY DATA & INITIAL STATE
// ==========================================
const initialPosts = [
  { 
    id: '1', 
    title: 'Getting Started with React Router', 
    content: 'React Router makes routing in React applications seamless. It allows you to build single-page applications with multiple views and synchronized URLs.' 
  },
  { 
    id: '2', 
    title: 'Why Vite is Awesome', 
    content: 'Vite provides a lightning-fast development environment and bundles your code efficiently using Rollup under the hood for production.' 
  },
  { 
    id: '3', 
    title: 'Understanding State and Props', 
    content: 'State is mutable data managed within a component, while props are immutable data passed down from parent components.' 
  },
];

// ==========================================
// 2. PAGE COMPONENTS
// ==========================================

// Home Page: Displays the list of all blog posts
function Home({ posts }) {
  return (
    <div>
      <h2>Latest Blog Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available yet. Be the first to add one!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {posts.map((post) => (
            <div key={post.id} style={styles.card}>
              <h3>{post.title}</h3>
              <p>{post.content.substring(0, 80)}...</p>
              {/* Link to dynamic article page */}
              <Link to={`/posts/${post.id}`} style={styles.readMoreBtn}>
                Read More &rarr;
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Single Article Page: Dynamic route reading an ID from the URL
function SinglePost({ posts }) {
  const { id } = useParams(); // Extracts the :id from the URL path
  const navigate = useNavigate();

  // Find the post that matches the ID from the URL
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div>
        <h3>Article Not Found</h3>
        <p>The article you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>
        &larr; Back
      </button>
      <h2>{post.title}</h2>
      <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>{post.content}</p>
    </div>
  );
}

// New Post Form: Demonstrates programmatic redirection after submission
function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now().toString(), // Generate a unique ID using timestamp
      title,
      content,
    };

    onAddPost(newPost); // Update parent state

    // Programmatically redirect user back to home page after publishing
    navigate('/');
  };

  return (
    <div>
      <h2>Create a New Article</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter article title..."
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Content:</label>
          <textarea 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Write your article content..."
            rows="5"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitBtn}>Publish Post</button>
      </form>
    </div>
  );
}

// About Page
function About() {
  return (
    <div>
      <h2>About This Blog</h2>
      <p>This is a sample blogging platform built to demonstrate routing capabilities using React Router.</p>
    </div>
  );
}

// 404 Page (Catch-all route)
function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h2>404 - Page Not Found</h2>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#007bff' }}>Return to Home</Link>
    </div>
  );
}

// ==========================================
// 3. MAIN APP & LAYOUT CONFIGURATION
// ==========================================
export default function SimpleBlog() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the beginning of array
  };

  return (
    <BrowserRouter>
      <div style={styles.container}>
        {/* Navigation Bar */}
        <nav style={styles.navbar}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>✍️ DevBlog</h1>
          <div style={styles.navLinks}>
            <NavLink 
              to="/" 
              style={({ isActive }) => ({ ...styles.link, fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#007bff' : '#333' })}
            >
              Home
            </NavLink>
            <NavLink 
              to="/create" 
              style={({ isActive }) => ({ ...styles.link, fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#007bff' : '#333' })}
            >
              Write Post
            </NavLink>
            <NavLink 
              to="/about" 
              style={({ isActive }) => ({ ...styles.link, fontWeight: isActive ? 'bold' : 'normal', color: isActive ? '#007bff' : '#333' })}
            >
              About
            </NavLink>
          </div>
        </nav>

        <hr style={{ margin: '1.5rem 0', border: '0', borderTop: '1px solid #ddd' }} />

        {/* Routes Component Mapping URLs to Views */}
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/posts/:id" element={<SinglePost posts={posts} />} />
          <Route path="/create" element={<CreatePost onAddPost={handleAddPost} />} />
          <Route path="/about" element={<About />} />
          {/* Catch-all route for any incorrect URLs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// ==========================================
// 4. BASIC STYLING OBJECTS
// ==========================================
const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
  },
  card: {
    border: '1px solid #e1e4e8',
    borderRadius: '6px',
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },
  readMoreBtn: {
    display: 'inline-block',
    marginTop: '0.5rem',
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: '500',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitBtn: {
    padding: '0.6rem 1rem',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};
