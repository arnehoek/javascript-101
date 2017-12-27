class Zoo {
    constructor() {
        this._animals = [];
    }

    addAnimal(animal) {
        this._animals.push(animal);
        console.log('zoo contains ', this._animals);
        animal.movements.subscribe(position => console.log('in the zoo, an animal walked to: ', position));
    }
}