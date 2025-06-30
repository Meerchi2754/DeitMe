import React, { useState, useEffect } from 'react';

const LinkedInAPI = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://linkedin-data-api.p.rapidapi.com/get-received-recommendations?username=ryanroslansky&start=0';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '696e9bc0e4msh896088ab0663cd9p18735cjsnf4a991431d59',
          'x-rapidapi-host': 'linkedin-data-api.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse as JSON
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>LinkedIn Recommendations</h1>
      {error && <p>Error fetching data: {error.message}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default LinkedInAPI;
