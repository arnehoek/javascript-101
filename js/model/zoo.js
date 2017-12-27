class Zoo {
    constructor(logger) {
        this._animals = [];
        this.logger = logger;
    }

    addAnimal(animal, options = {onCollision: null}) {
        let newZooAnimal = {
            animal: animal,
            options: options
        };

        this._animals.push(newZooAnimal);

        document.querySelector('.animal-overview').innerHTML = `Zoo contains: <br> ${this._animals.map(zooAnimal => `${zooAnimal.animal.name} @ ${zooAnimal.animal.position}<br>`)}`;

        animal.movements.subscribe(position => {
            this.logger.log(`in the zoo, ${animal.name} walked to [${position}]`);

            let collidesWith = this.collidesWith(newZooAnimal);
            if (collidesWith.length > 0) {
                this.handleCollision([...collidesWith, newZooAnimal]);
            }
        });
    }

    handleCollision(zooAnimals) {
        zooAnimals.forEach(zooAnimal => {
            if (zooAnimal.options != null && zooAnimal.options.onCollision != null) {
               zooAnimal.options.onCollision();
            }
        })
    }

    collidesWith(zooAnimal) {
        return this._animals
            .filter(animal => animal !== zooAnimal)
            .filter(animal => animal.animal.position[0] === zooAnimal.animal.position[0] && animal.animal.position[1] === zooAnimal.animal.position[1]);
    }
}