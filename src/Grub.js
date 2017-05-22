var Grub = function() {
  this.age = 0;
  this.color = 'pink';
  this.food = this.food('jelly');
};

Grub.prototype.eat = function (){};

Grub.prototype.food = function (food){
  return food;
}

