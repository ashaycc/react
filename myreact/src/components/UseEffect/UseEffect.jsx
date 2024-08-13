import React, { useState, useEffect } from 'react';
import '../UseEffect/UseEffect.css'

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate a delay
    const delay = 2000; // 2000 milliseconds (2 seconds)

    // Fetch data from an API
    const fetchData = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, delay));

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {/* Display loading placeholders */}
          {[...Array(10)].map((_, index) => (
            <li key={index} className="loading-placeholder"></li>
          ))}
        </ul>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
