import https from 'https';

export default async function handler(req, res) {
  const url = 'https://skypractice.xyz:25622/api' + req.url;

  https.get(url, (response) => {
    let data = '';
    
    response.on('data', (chunk) => {
      data += chunk;
    });
    
    response.on('end', () => {
      res.status(200).json(JSON.parse(data));
    });
  }).on('error', (error) => {
    console.error('Error in serverless function:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  });
}
