'use strict';

module.exports = exports = (app) => {
  app.controller('HomeController', [HomeController]);

  function HomeController() {
    this.messages = ['one', 'tiger', 'bologna'];
  }

};
