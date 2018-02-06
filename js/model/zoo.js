class Zoo {
    constructor() {
        this._animals = [];
    }

    addAnimal(animal) {
        this._animals.push(animal);
        console.log('zoo contains ', this._animals);
    }
}