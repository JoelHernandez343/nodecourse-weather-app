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

    const places = await instance.get();

    return places.data.features.map(place => ({
      id: place.id,
      name: place.place_name,
      value: place.id,
      description: place.place_name,
      longitude: place.center[0],
      latitude: place.center[1],
    }));
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

    const res = await instance.get();
    const weather = res.data.weather[0];
    const main = res.data.main;

    return {
      description: weather.description,
      icon: weather.icon,
      temp: main.temp,
      feels_like: main.feels_like,
      min: main.temp_min,
      max: main.temp_max,
      humidity: main.humidity,
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
