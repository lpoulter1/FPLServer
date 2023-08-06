const fetch = require('node-fetch');

// Serverless function handler
module.exports = async (req, res) => {
  // Add CORS headers to allow cross-origin requests
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  // Check if the request method is OPTIONS (preflight request)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const bootstrapResponse = await fetch(
      'https://fantasy.premierleague.com/api/bootstrap-static/'
    );
    const bootstrapData = await bootstrapResponse.json();

    const fixturesResponse = await fetch(
      'https://fantasy.premierleague.com/api/fixtures/'
    );
    const fixturesData = await fixturesResponse.json();

    const responseData = {
      bootstrapData: bootstrapData,
      fixturesData: fixturesData,
    };

    // Send the response
    res.status(200).json(responseData);
  } catch (error) {
    // Handle errors
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

