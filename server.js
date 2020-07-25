const express = require('express');
const corsMiddleware = require('cors');

const app = express();

function start() {
  app.use(express.static('./dist/my-app-angular'));
  app.use(
    corsMiddleware({
      origin: 'https://newsapi.org',
      optionsSuccessStatus: 200,
    }),
  );
  app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/my-app-angular' });
  });

  app.listen(process.env.PORT || 8080, () => {
    console.log('Server has been started!');
  });
}

start();
