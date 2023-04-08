const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, minAge) => (
  species.find(({ name }) => name === animal).residents.every(({ age }) => age >= minAge)
);

module.exports = getAnimalsOlderThan;
