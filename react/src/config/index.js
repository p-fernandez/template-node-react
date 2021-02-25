const fs = require('fs');
const nconf = require('nconf');
const path = require('path');

const configFile = process.env.NODE_ENV === 'development' ? 'config.json' : 'config.prod.json';
const configFilePath = path.join(__dirname, configFile);

const requiredVariables = [
];

if (!fs.existsSync(configFilePath)) {
  console.error(`Missing mandatory config file at <ROOT>/server/config/${configFile}`);
  process.exit();
}

try {
  nconf.file(configFilePath);
} catch (error) {
  const { message } = error;
  console.error(`${message}. Probably this is a malformed JSON file.`);
  process.exit();
}

try {
  nconf.required(requiredVariables);
} catch (error) {
  const { message } = error;
  console.error(message);
  process.exit();
}

const prepareEnvVariables = requiredVariables.reduce((acc, el) => {
  const [group, element] = el.split(':');

  return {
    ...acc,
    [group]: {
      ...acc[group],
      [element]: nconf.get(el)
    }
  };
}, {});

module.exports = prepareEnvVariables;
