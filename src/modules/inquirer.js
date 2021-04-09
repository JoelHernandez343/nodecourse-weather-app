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
  console.log('----------------------------------'.yellow.bgBlack);
  console.log('       Weather console app        '.bold.white.bgBlack);
  console.log('----------------------------------\n'.yellow.bgBlack);

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

const getTasksToDelete = async tasks => {
  const choices = tasks.map(({ id, description }, i) => ({
    value: id,
    name: `${`${i + 1}.`.green} ${description}`,
    checked: false,
  }));

  const { ids } = await inquirer.prompt({
    type: 'checkbox',
    name: 'ids',
    message: 'Mark tasks to delete them. Leave blank to cancel:',
    choices,
  });

  return ids;
};

const getTasksToggle = async tasks => {
  const choices = tasks.map(({ id, description, date }, i) => ({
    value: id,
    name: `${`${i + 1}.`.green} ${description}`,
    checked: !!date,
  }));

  const { ids } = await inquirer.prompt({
    type: 'checkbox',
    name: 'ids',
    message: 'Mark tasks as completed or unmark them to set pending:',
    choices,
  });

  return ids;
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
  getTasksToDelete,
  getTasksToggle,
  menu,
  confirm,
  pause,
  ask,
};
