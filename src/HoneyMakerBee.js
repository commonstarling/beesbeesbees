var HoneyMakerBee = function() {
  this.age = 10;
  this.job = this.job('make honey');
  this.color = this.color('yellow');
  this.food = this.food('jelly');
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(){
  this.honeyPot--;
};