// pages/api/index.js
function proxy async (req, res) => {
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

    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

export default allowCors(proxy)


