class Animal {
    constructor() {
        console.log('we created an animal');
        this._position = [0,0];
    }

    left() {
        this._position[0]--;
        return this;
    }

    right() {
        this._position[0]++;
        return this;
    }

    up() {
        this._position[1]++;
        return this;
    }

    down() {
        this._position[1]--;
        return this;
    }

    get position() {
        return this._position;
    }
}