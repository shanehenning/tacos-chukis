'use strict';

module.exports = exports = (app) => {
  app.component('tcNav', {
    template: require('./nav-template.html'),
    controller: 'NavController'
  });
};
