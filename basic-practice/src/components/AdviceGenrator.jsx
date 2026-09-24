import react, { useState, useEffect } from 'react';

export default function AdviceGenrator() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle fetching advice from the API
  const fetchAdvice = async () => {
    try {
      setLoading(true);
      setError(null);

      // Advice Slip API adds a cache-buster query parameter to avoid cached responses
      const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${Date.now()}`);

      // 1. Check if the HTTP response status is OK (200-299)
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      // 2. Parse the JSON payload
      const data = await response.json();

      // 3. Update state with the fetched slip data
      setAdvice(data.slip);
    } catch (err) {
      setError(err.message || 'Failed to fetch advice.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch a quote automatically when the component first mounts
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {loading && <p style={styles.loadingText}>Fetching wisdom...</p>}

        {error && (
          <div style={styles.errorBox}>
            <p style={styles.errorText}>⚠️ {error}</p>
          </div>
        )}

        {!loading && !error && advice && (
          <>
            <p style={styles.idText}>ADVICE #{advice.id}</p>
            <blockquote style={styles.adviceText}>"{advice.advice}"</blockquote>
          </>
        )}

        <button 
          onClick={fetchAdvice} 
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Loading...' : 'Get New Advice'}
        </button>
      </div>
    </div>
  );
}

// Basic inline styling for presentation
const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    fontFamily: 'system-ui, sans-serif',
    padding: '20px',
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    padding: '32px',
    maxWidth: '450px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
  },
  idText: {
    color: '#38bdf8',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '2px',
    marginBottom: '16px',
  },
  adviceText: {
    color: '#f8fafc',
    fontSize: '1.35rem',
    fontWeight: '500',
    lineHeight: '1.5',
    margin: '0 0 24px 0',
  },
  loadingText: {
    color: '#94a3b8',
    fontSize: '1.1rem',
    margin: '20px 0',
  },
  errorBox: {
    backgroundColor: '#451a1a',
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '20px',
  },
  errorText: {
    color: '#f87171',
    margin: 0,
  },
  button: {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  },
};