const express = require('express');

const app = express();

function start() {
  app.use(express.static('./dist/my-app-angular'));

  app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/my-app-angular' });
  });

  app.listen(process.env.PORT || 8080, () => {
    console.log('Server has been started!');
  });
}

start();
