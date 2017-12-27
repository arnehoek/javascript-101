function Bear() {
    Animal.call();
    console.log('we created a bear');
}

Bear.prototype = Object.create(Animal.prototype);

Bear.prototype.constructor = Bear;
