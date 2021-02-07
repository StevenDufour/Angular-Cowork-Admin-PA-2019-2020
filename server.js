const express = require('express'),
  app = express();

app.use(express.static('dist/cowork-admin'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {root: 'dist/cowork-admin'}
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)
