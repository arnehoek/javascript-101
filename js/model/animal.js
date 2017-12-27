define(['../controllers/logger', '../helpers/subject'], (logger) => {
    return class Animal {
        constructor(name) {
            logger.log('we created an animal');
            this._position = [0, 0];
            this._movements = new Subject();
            this._name = name;
        }

        left() {
            this._position[0]--;
            this._movements.next(this.position);
            return this;
        }

        right() {
            this._position[0]++;
            this._movements.next(this.position);
            return this;
        }

        up() {
            this._position[1]++;
            this._movements.next(this.position);
            return this;
        }

        down() {
            this._position[1]--;
            this._movements.next(this.position);
            return this;
        }

        get position() {
            return this._position;
        }

        get movements() {
            return this._movements;
        }

        get name() {
            return this._name;
        }
    }
});