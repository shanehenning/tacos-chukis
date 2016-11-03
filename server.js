const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('./build')).listen(port, function() {
  console.log('Demo app listening on port ' + port + '!');
});

app.get('*', function(req, res) {
  res.sendfile('${__dirname}/public/index/html');
});
