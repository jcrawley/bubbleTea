/*
 * Cup.js defines the cup and tapioca balls, and how they interact.
 * Swag.
 * Authors: Joseph Crawley, Ronald Martin
 * June 2014
 */

function Cup() {
  // Game State
  var score    = 0;
  var numBalls = 0;

  // List of balls in the cup.
  this.balls : [];

  function TapiocaBall(x, y) {
    // Location
    this.x = x;
    this.y = y;

    this.radius = 25;
    this.level  = numBalls++;
  }

  // Add a new ball at this location
  this.genBall : function(x, y) {
    this.balls.push(new TapiocaBall(x, y));
  }

  // Check if there is a ball at this location
  this.hasBall : function(x, y) {
    this.balls.foreach(function(ball) {
      if (Math.pow(x - ball.x, 2) + Math.pow(y - ball.y, 2) < ball.radius * ball.radius)
        return ball;
    });
    return false;
  }

  // Remove this ball from the list
  this.removeBall : function(ball) {
    var index = this.balls.indexof(ball);
    if (index > -1){
      this.balls.splice(index, 1);
      --numBalls;
    }
  }

  // Try to slurp a ball at this location.
  this.slurp : function(x, y) {
    var ball = cup.hasBall(x, y);
    if (ball) {
      ++score;
      cup.removeBall(ball);
    }
  }
}