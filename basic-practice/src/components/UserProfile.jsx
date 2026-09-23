import React, { useState, useEffect } from 'react'; 

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Guard Clause: Stop execution if userId is undefined or null
    if (!userId) {
      setLoading(false); 
      return;
    }

    const fetchUserData = async () => {
      try {
        setLoading(true);
        // CHANGED: Using a real, working public API for testing
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]); 

  // 2. Added a safety check to ensure 'user' exists before rendering its properties
  if (loading) return <p>Loading...</p>;
  if (!userId) return <p>No user selected.</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user data found.</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfile;
