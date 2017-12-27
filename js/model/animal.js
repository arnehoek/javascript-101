class Animal {
    constructor() {
        console.log('we created an animal');
        this._position = [0,0];
    }

    left() {
        this._position[0]--;
    }

    right() {
        this._position[0]++;
    }

    up() {
        this._position[1]++;
    }

    down() {
        this._position[1]--;
    }

    get position() {
        return this._position;
    }
}