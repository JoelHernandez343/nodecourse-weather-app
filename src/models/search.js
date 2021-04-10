const axios = require('axios').default;

class Searches {
  constructor() {}

  get _ParamsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: 'en',
    };
  }

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
        params: this._ParamsMapbox,
      });

      const rest = await instance.get();
      console.log(rest.data);
    } catch (err) {
      console.log(err);
    }
    return [];
  }
}

module.exports = Searches;
