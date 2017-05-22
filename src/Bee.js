var Bee = function() {
  this.age = 5;
  this.color  = 'yellow';
  this.food = this.food('jelly');
  this.job = this.job('keep on growing');
};

Bee.prototype = Object.create(Grub.prototype);

Bee.prototype.constructor = Bee;

Bee.prototype.job = function (job){
  return job;
};