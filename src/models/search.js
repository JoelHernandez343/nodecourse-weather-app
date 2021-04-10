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

      const res = await instance.get();
      return res.data.features.map(place => ({
        id: place.id,
        name: place.place_name,
        value: place.id,
        description: place.place_name,
        longitude: place.center[0],
        latitude: place.center[1],
      }));
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Searches;
