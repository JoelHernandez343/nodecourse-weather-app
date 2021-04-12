const axios = require('axios').default;

const params = {
  access_token: process.env.MAPBOX_KEY,
  limit: 5,
  language: 'en',
};

const getPlaces = async place => {
  try {
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
      params,
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
};

module.exports = {
  getPlaces,
};
