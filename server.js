const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/build`)).listen(port, function() {
  console.log('Demo app listening on port ' + port + '!');
});

app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});
