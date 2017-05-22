var ForagerBee = function() {
  this.age = 10;
  this.job = this.job('find pollen');
  this.color  = this.color('yellow');
  this.food = this.food('jelly');
  this.canFly = this.canFly();
  this.treasureChest = this.treasureChest();
};

ForagerBee.prototype = Object.create(HoneyMakerBee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.canFly = function (){
  return true;
};

ForagerBee.prototype.treasureChest = function (){
  return [];
};

ForagerBee.prototype.forage = function (){
  this.treasureChest.push('treasure');
};