var express = require('express');

const port = process.env.PORT || 8080;

express().use(express.static('./build')).listen(port, function() {
  console.log('Demo app listening on port ' + port + '!');
});
