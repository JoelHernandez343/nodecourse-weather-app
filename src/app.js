const { pause, menu } = require('./modules/inquirer');

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
      break;

    case '0':
      console.log('\nBye :)');
      return;
  }

  await pause();
};

module.exports = app;
