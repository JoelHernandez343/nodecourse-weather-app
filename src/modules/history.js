const fs = require('fs');
const { save, read } = require('./file');

const file = 'history.json';

class History {
  constructor() {
    this.load();
  }

  add(place) {
    if (this._history.find(p => p.id === place.id)) {
      return;
    }

    this._history.push(place);

    this.save();
  }

  get list() {
    return this._history;
  }

  save() {
    save(JSON.stringify(this._history));
  }

  load() {
    this._history = JSON.parse(read()) ?? [];
  }
}

module.exports = History;
