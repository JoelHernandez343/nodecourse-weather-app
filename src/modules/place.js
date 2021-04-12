const wordwrap = require('wordwrapjs/dist');
require('colors');

const { getPlaces, getWeather } = require('./axios');
const { showIconWithInfo } = require('./icons');
const { ask, choiceSingleItem } = require('./inquirer');

const searchPlace = async () => {
  const term = await ask('Input the place to search:');
  const places = await getPlaces(term);

  if (places === false) {
    return true;
  }

  const selection = await choiceSingleItem(places, 'Select a city:');

  if (selection === '0') {
    return false;
  }

  const place = places.find(place => place.id === selection);
  const weather = await getWeather({
    longitude: place.longitude,
    latitude: place.latitude,
  });

  if (weather === false) {
    return true;
  }

  showPlace(place, weather);

  return true;
};

const showPlace = (place, weather) => {
  console.log('  Place information'.green);

  const info = [
    `${'Latitude:'.yellow}     ${place.latitude}`,
    `${'Longitude:'.yellow}    ${place.longitude}`,
    `${'Temperature:'.yellow}  ${weather.temp}`,
    `${'Min:'.yellow}          ${weather.min}`,
    `${'Max:'.yellow}          ${weather.max}`,
    `${'Weather:'.yellow}      ${weather.description}`,
    `${'Humidity:'.yellow}     ${weather.humidity}`,
  ];

  const name = wordwrap
    .wrap(place.name, { width: 30, break: true })
    .split('\n')
    .map((l, i) => `${i === 0 ? 'Name:'.yellow : '     '}         ${l}`);

  info.unshift(...name);

  showIconWithInfo(weather.icon, info);
};

module.exports = { searchPlace };
