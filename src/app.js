const Searches = require('./models/search');
const { pause, menu, ask } = require('./modules/inquirer');

const search = new Searches();

const app = async () => {
  let option = '1';

  do {
    option = await menu(option);
    await switchOption(option);
  } while (option !== '0');
};

const switchOption = async option => {
  switch (option) {
    case '1':
      const place = await ask('Input the place to search:');
      search.city(place);
      break;

    case '0':
      console.log('\nBye :)');
      return;
  }

  await pause();
};

module.exports = app;
