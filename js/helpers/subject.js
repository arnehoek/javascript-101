class Subject {
    constructor() {
        this._subscriptions = [];
    }

    /**
     * Will emit a new value to all subscribers
     * @param value value to be emitted to all subscribers
     */
    next(value) {
        this._subscriptions.forEach(cb => cb(value));
    }

    /**
     * calls the callback whenever a new value it passed
     * @param cb method to be called on new values
     */
    subscribe(cb) {
        this._subscriptions.push(cb);
    }
}