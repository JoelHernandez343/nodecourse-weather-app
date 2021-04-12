require('colors');

const { getPlaces } = require('./axios');
const { ask, choiceSingleItem } = require('./inquirer');

const showPlace = place => {
  console.log();
  console.log('  Place information'.green);
  console.log(`  ${'Nombre:    '.yellow} ${place.name}`);
  console.log(`  ${'Latitude:  '.yellow} ${place.latitude}`);
  console.log(`  ${'Longitude: '.yellow} ${place.longitude}`);
  console.log();
};

const searchPlace = async () => {
  const term = await ask('Input the place to search:');
  const places = await getPlaces(term);
  const selection = await choiceSingleItem(places, 'Select a city:');

  if (selection === '0') {
    return false;
  }

  return places.find(place => place.id === selection);
};

module.exports = { searchPlace, showPlace };
