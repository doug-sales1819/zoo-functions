const { species: animals } = require('../data/zoo_data');

const getSpeciesCount = ({ species, sex }) => {
  const animalCount = animals.reduce((acc, { name, residents }) => {
    acc[name] = !sex ? residents.length : residents.filter((specie) => specie.sex === sex).length;
    return acc;
  }, {});
  return !species ? animalCount : animalCount[species];
};

const countAnimals = (options) => {
  const animal = { species: '', sex: '' };
  Object.assign(animal, options);
  return getSpeciesCount(animal);
};

module.exports = countAnimals;
