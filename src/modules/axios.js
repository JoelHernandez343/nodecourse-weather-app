const axios = require('axios').default;

const placeParams = {
  access_token: process.env.MAPBOX_KEY,
  limit: 5,
  language: 'en',
};

const weatherParams = ({ latitude, longitude }) => ({
  appid: process.env.OPENWATHER_KEY,
  lat: latitude,
  lon: longitude,
  units: 'metric',
});

const getPlaces = async place => {
  try {
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
      params: placeParams,
    });

    const {
      data: { features },
    } = await instance.get();

    return features.map(
      ({ id, place_name: name, center: [longitude, latitude] }) => ({
        id,
        name,
        value: id,
        description: name,
        longitude,
        latitude,
      })
    );
  } catch (err) {
    console.log(err);

    return false;
  }
};

const getWeather = async coordinates => {
  try {
    const instance = axios.create({
      baseURL: `https://api.openweathermap.org/data/2.5/weather`,
      params: weatherParams(coordinates),
    });

    const {
      data: {
        weather: [{ description, icon }],
        main: { temp, temp_min: min, temp_max: max, humidity },
      },
    } = await instance.get();

    return {
      description,
      icon,
      temp,
      min,
      max,
      humidity,
    };
  } catch (err) {
    console.log(err);

    return false;
  }
};

module.exports = {
  getPlaces,
  getWeather,
};
