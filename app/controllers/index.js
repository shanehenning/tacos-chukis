'use strict';

module.exports = exports = (app) => {
  require('./home-controller')(app);
  require('./nav-controller')(app);
};
