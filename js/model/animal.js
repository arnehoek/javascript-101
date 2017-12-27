define(['../helpers/subject'], () => {
    return class Animal {
        constructor() {
            console.log('we created an animal');
            this._position = [0, 0];
            this._movements = new Subject();
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
    }
});