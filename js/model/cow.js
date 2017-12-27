define(['./animal'], (Animal) => {
    return class Cow extends Animal {
        constructor() {
            super();
            console.log('we created a cow');
        }

        mooh() {
            console.log('Mooh');
        }
    }
});