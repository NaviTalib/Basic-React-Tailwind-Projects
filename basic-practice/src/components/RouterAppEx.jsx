import React from 'react';
import {BrowserRouter,Routes,Route,Link,useParams,useNavigate} from 'react-router';

function Home(){
    return (
        <div>
            <h2>Home Page</h2>
            <p>Welcome to the React Router demo.</p>
        </div>
    );
}

function About(){
    const navigate = useNavigate();

    return (
        <div>
            <h2>About Page</h2>
            <p>This page demonstrates programmatic navigation.</p>
            <button onClick={()=> navigate('/')}>Take Me Home</button>
        </div>
    );
}

function UserProfile(){
    // extracting dynamic segment fromthe URL
    const {username} = useParams();

    return (
        <div>
            <h2>User Profile</h2>
            <p>Viewing profile for: <strong>{username}</strong></p>
        </div>
    );
}

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

const RouterAppEx = () => {
  return (
    <BrowserRouter>
        <div>
            {/* Navigation bar persistent across routes */}         
            <nav style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/user/navitalib">Profile (Navi Talib)</Link>
        </nav>
        <hr />
        {/* Route matching container */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Dynamic route parameter (:username) */}
            <Route path="/user/:username" element={<UserProfile />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<NotFound />} />
        </Routes>

        </div>
    </BrowserRouter>
  )
}

export default RouterAppEx