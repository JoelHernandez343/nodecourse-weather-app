const inquirer = require('inquirer');
require('colors');

const questions = prev => ({
  type: 'list',
  name: 'option',
  message: 'Select an option',
  default: prev,
  choices: [
    {
      value: '1',
      name: `${'1.'.bold.green} Search city`,
    },
    {
      value: '2',
      name: `${'2.'.bold.green} History`,
    },
    {
      value: '0',
      name: `${'3.'.bold.green} Exit`,
    },
  ],
});

const menu = async prev => {
  console.clear();
  console.log(
    '------------------------------------------------------------------'.yellow
      .bgBlack
  );
  console.log(
    '                       Weather console app                        '.white
      .bgBlack.bold
  );
  console.log(
    '------------------------------------------------------------------\n'
      .yellow.bgBlack
  );

  const { option } = await inquirer.prompt(questions(prev));

  return option;
};

const pause = async () =>
  await inquirer.prompt({
    name: '_',
    message: `Press ${'ENTER'.green} to continue.`,
  });

const ask = async message => {
  const { result } = await inquirer.prompt({
    type: 'input',
    name: 'result',
    message,
    validate(value) {
      if (value.length === 0) {
        return 'Enter a value.';
      }

      return true;
    },
  });

  return result;
};

const choiceSingleItem = async (options, message) => {
  const choices = options.map(({ value, description }, i) => ({
    value,
    name: `${`${i + 1}.`.green} ${description}`,
  }));

  choices.unshift({
    value: '0',
    name: `${`0.`.green} Cancel`,
  });

  const { item } = await inquirer.prompt({
    type: 'list',
    name: 'item',
    message,
    choices,
  });

  return item;
};

const confirm = async message => {
  const { ok } = await inquirer.prompt({
    type: 'confirm',
    name: 'ok',
    message,
  });

  return ok;
};

module.exports = {
  ask,
  menu,
  pause,
  confirm,
  choiceSingleItem,
};
