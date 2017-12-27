define(['./animal', '../controllers/logger'], (Animal, logger) => {
    return class Bear extends Animal {
        constructor(name) {
            super(name, logger);
            logger.log('we created a bear');
        }

        growl() {
            logger.log('Growl');
        }
    }
});