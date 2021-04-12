const { pause, menu } = require('./modules/inquirer');
const { searchPlace, selectPlace } = require('./modules/place');
const History = require('./modules/history');

const history = new History();

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

      if (place === 'canceled') return;
      if (place !== 'error') history.add(place);

      break;

    case '2':
      const res = await selectPlace(history.list);

      if (res === 'canceled') return;

      break;

    case '0':
      console.log('\nBye :)');
      return;
  }

  await pause();
};

module.exports = app;
