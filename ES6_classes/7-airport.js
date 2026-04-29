export default class Airport {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    get code() { return this._code; }
    get name() { return this._name; }

    set code(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = value;
    }
    set name(value) {
        if (typeof value !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = value;
    }

     get [Symbol.toStringTag]() { return this._code; }
}
