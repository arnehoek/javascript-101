define(['./animal'], (Animal) => {
    return class Bear extends Animal {
        constructor(name) {
            super(name);
            console.log('we created a bear');
        }

        growl() {
            console.log('Growl');
        }
    }
});