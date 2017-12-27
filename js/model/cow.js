define(['./animal'], (Animal) => {
    return class Cow extends Animal {
        constructor(name) {
            super(name);
            console.log('we created a cow');
        }

        mooh() {
            console.log('Mooh');
        }
    }
});