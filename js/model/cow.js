function Cow() {
    Animal.call();
    console.log('we created a cow');
}

Cow.prototype = Object.create(Animal.prototype);

Cow.prototype.constructor = Cow;