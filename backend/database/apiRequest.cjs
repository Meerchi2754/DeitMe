// Use dynamic import inside an async function
const fetchData = async () => {
  const fetch = (await import('node-fetch')).default;

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
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the function
fetchData();
