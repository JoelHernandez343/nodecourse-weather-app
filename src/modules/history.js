class History {
  constructor() {
    this._history = [];
  }

  add(place) {
    if (this._history.find(p => p.id === place.id)) {
      return;
    }

    this._history.push(place);
  }

  get list() {
    return this._history;
  }
}

module.exports = History;
