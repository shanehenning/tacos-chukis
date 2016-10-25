'use strict';

module.exports = exports = (app) => {
  app.component('tcHome', {
    template: require('./home-template.html'),
    controller: 'HomeController'
  });
};
