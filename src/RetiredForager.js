var RetiredForagerBee = function() {
  this.age = 40;
  this.job = this.job('gamble');
  this.canFly = this.canFly(false);
  this.color = this.color('grey');
  this.food = this.food('jelly');
  this.treasureChest = this.treasureChest();
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.gamble = function (){
  this.treasureChest.push('treasure');
};