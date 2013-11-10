// Generated by CoffeeScript 1.6.3
(function() {
  define(['Player', 'Zombie'], function(Player, Zombie) {
    var App;
    return App = (function() {
      function App() {
        this.zombie = new Zombie();
        this.player = new Player();
      }

      App.prototype.start = function() {
        this.zombie.render();
        this.player.render();
        this.zombie.moan();
        return this.player.scream();
      };

      return App;

    })();
  });

}).call(this);
