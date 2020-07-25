const axios = require('axios');
const express = require('express');
const corsMiddleware = require('cors');

const app = express();

function start() {
  app.use(express.static('./dist/my-app-angular'));
  app.use(corsMiddleware());
  app.use(express.json());

  app.post('/api/getnews', async function(req, res) {
    const { page, pageSize } = req.body;
    const result = await axios(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${page}&pageSize=${pageSize}&apiKey=8a1bb630f5084ccdbb160829f159a759`,
    );

    res.end(JSON.stringify(result.data));
  });

  app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/my-app-angular' });
  });

  const POST = process.env.PORT || 8080;
  app.listen(POST, () => {
    console.log(`Server has been started on ${POST}!`);
  });
}

start();
