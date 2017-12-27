define(['./animal', '../controllers/logger'], (Animal, logger) => {
    return class Cow extends Animal {
        constructor(name) {
            super(name, logger);
            logger.log('we created a cow');
        }

        mooh() {
            logger.log('Mooh');
        }
    }
});