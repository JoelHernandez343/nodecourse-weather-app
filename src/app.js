const { pause, menu } = require('./modules/inquirer');
const { searchPlace, showPlace } = require('./modules/place');

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
      const place = await searchPlace();
      if (!place) {
        return;
      }

      showPlace(place);
      break;

    case '0':
      console.log('\nBye :)');
      return;
  }

  await pause();
};

module.exports = app;
