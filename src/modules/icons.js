require('colors');

const clearSkyDay = [
  `          |          `.yellow,
  `      \\       /      `.yellow,
  `        .-"-.        `.yellow,
  `   --  /     \\  --   `.yellow,
  `       \\     /       `.yellow,
  `        ˙-_-˙        `.yellow,
  `      /       \\      `.yellow,
  `          |          `.yellow,
];

const clearSkyNight = [
  `        .---.        `.white,
  `       / °   \\       `.white,
  `       \\   ° /       `.white,
  `        ᐠ---ᐟ        `.white,
];

const fewCloudsDay = [
  `            |        `.yellow,
  `        \\       /    `.yellow,
  `          .-"-.      `.yellow,
  ` ${`   ,~'\`-`.blue}${`/     \\  --`.yellow} `,
  ` ${` _(   _) )`.blue}    ${'/'.yellow}     `,
  ` ${`(  \`    ' )`.blue}${'_-˙'.yellow}      `,
  ` ${` \`-'\`~~=~'`.blue}     ${'\\'.yellow}    `,
  `            |        `.yellow,
];

const fewCloudsNight = [
  `             .---.   `.white,
  `    ${`   ,~'\`-`.blue}${`/ °   \\`.white}  `,
  `    ${` _(   _) )`.blue}  ${'° /'.white}  `,
  `    ${`(  \`    ' )`.blue}${'--ᐟ'.white}   `,
  `     \`-'\`~~=~'       `.blue,
];

const scatteredClouds = [
  `        ,~'\`-        `.blue,
  `      _(   _) )      `.blue,
  `     (  \`    ' )     `.blue,
  `      \`-'\`~~=~'      `.blue,
];

const brokenClouds = [
  `            ,~'\`-    `.blue,
  `     ,~'\`- ◜      )  `.blue,
  `   _(   _) )     ' ) `.blue,
  `  (  \`    ' )\`~~=~'  `.blue,
  `   \`-'\`~~=~'         `.blue,
];

const showerRain = [
  `        ,~'\`-        `.blue,
  `      _(   _) )      `.blue,
  `     (  \`    ' )     `.blue,
  `      \`-'\`~~=~'      `.blue,
  `      /, // ,/ /,    `.cyan,
  `       // ,/,/,      `.cyan,
];

const rainDay = [
  `            |        `.yellow,
  `        \\       /    `.yellow,
  `          .-"-.      `.yellow,
  ` ${`   ,~'\`-`.blue}${`/     \\  --`.yellow} `,
  ` ${` _(   _) )`.blue}    ${'/'.yellow}     `,
  ` ${`(  \`    ' )`.blue}${'_-˙'.yellow}      `,
  ` ${` \`-'\`~~=~'`.blue}     ${'\\'.yellow}    `,
  `  /, // ,/ /,        `.cyan,
  `   // ,/,/,          `.cyan,
];

const rainNight = [
  `           .---.     `.white,
  `  ${`   ,~'\`-`.blue}${`/ °   \\`.white}    `,
  `  ${` _(   _) )`.blue}  ${'° /'.white}    `,
  `  ${`(  \`    ' )`.blue}${'--ᐟ'.white}     `,
  `   \`-'\`~~=~'         `.blue,
  `   /, // ,/ /,       `.cyan,
  `    // ,/,/,         `.cyan,
];

const thunderstorm = [
  `        ,~'\`-        `.blue,
  `      _(   _) )      `.blue,
  `     (  \`    ' )     `.blue,
  `      \`-'\`~~=~'      `.blue,
  `         /_/         `.yellow,
  `       /⸍            `.yellow,
];

const snow = [
  `       __/\\__        `.white,
  `       \\_\\/_/        `.white,
  `       /_/\\_\\        `.white,
  `         \\/          `.white,
];

const mist = [
  `      ____ ___       `.white,
  `    _( _  )  _)_     `.white,
  `   (_   ___) ___)    `.white,
  `    (___)______)     `.white,
];

const selectIcon = icon => {
  switch (icon) {
    case '01d':
      return clearSkyDay;

    case '01n':
      return clearSkyNight;

    case '02d':
      return fewCloudsDay;

    case '02n':
      return fewCloudsNight;

    case '03d':
    case '03n':
      return scatteredClouds;

    case '04d':
    case '04n':
      return brokenClouds;

    case '09d':
    case '09n':
      return showerRain;

    case '10d':
      return rainDay;

    case '10n':
      return rainNight;

    case '11d':
    case '11n':
      return thunderstorm;

    case '13d':
    case '13n':
      return snow;

    case '50d':
    case '50n':
      return mist;
  }

  return [];
};

const showIconWithInfo = (selectedIcon, info) => {
  const icon = selectIcon(selectedIcon);
  const emptyLine = ' '.repeat(21);

  console.log();

  for (let i = 0; i < icon.length || i < info.length; ++i) {
    const iconLine = `${icon[i]?.bold ?? emptyLine}`.bold;
    const infoLine = info[i] ?? '';

    console.log(`  ${iconLine}  ${infoLine}`);
  }

  console.log();
};

module.exports = {
  showIconWithInfo,
};
