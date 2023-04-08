const { species: animals } = require('../data/zoo_data');

const countSpeciesBySex = (residents, targetSex) => (
  residents.filter(({ sex }) => sex === targetSex).length
);

const getCountOfAllSpecies = () => (
  animals.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {})
);

const countAnimals = (specie) => {
  const animal = { species: '', sex: '' };

  Object.assign(animal, specie);

  const speciesCount = getCountOfAllSpecies();

  if (!animal.species) {
    return speciesCount;
  }
  if (animal.species && animal.sex) {
    const matchingSpecie = animals.find(({ name }) => name === animal.species);
    if (matchingSpecie) {
      return countSpeciesBySex(matchingSpecie.residents, animal.sex);
    }
    return 0;
  }
  return speciesCount[animal.species];
};

module.exports = countAnimals;
