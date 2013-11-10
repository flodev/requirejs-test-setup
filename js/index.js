// Generated by CoffeeScript 1.6.3
(function() {
  requirejs.config({
    baseUrl: 'js/app',
    shim: {
      'jquery': {
        "export": ['$']
      }
    },
    paths: {
      'jquery': '../lib/jquery/jquery'
    }
  });

  require(['App'], function(App) {
    var app;
    app = new App;
    return app.start();
  });

}).call(this);
