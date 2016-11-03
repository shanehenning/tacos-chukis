const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(`${__dirname}/build`)).listen(port, function() {
  console.log('Demo app listening on port ' + port + '!');
});

app.use('bundle.js', express.static(`${__dirname}/build/bundle.js`));


app.get('*', function(req, res) {
  res.sendFile(`${__dirname}/build/index.html`);
});
