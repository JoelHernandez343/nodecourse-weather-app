const Searches = require('./models/search');
const { pause, menu, ask, choiceSingleItem } = require('./modules/inquirer');

const search = new Searches();

const app = async () => {
  console.clear();

  let option = '1';

  do {
    option = await menu(option);
    await switchOption(option);
  } while (option !== '0');
};

const switchOption = async option => {
  switch (option) {
    case '1':
      if (!(await searchPlace(option))) {
        console.log('k pedo');
        return;
      }
      break;

    case '0':
      console.log('\nBye :)');
      return;
  }

  await pause();
};

const searchPlace = async option => {
  const term = await ask('Input the place to search:');
  const places = await search.city(term);
  const selection = await choiceSingleItem(places, 'Select a city:');

  if (selection === '0') {
    return false;
  }

  console.log(selection);

  return true;
};

module.exports = app;
