const data = require('./data');

const {
  animals,
  employees,
  hours,
  prices,
} = data;

/*
  TODO: 1. IMPLEMENTE A FUNÇÃO animalsByIds
  - Esta função é responsável pela busca das espécies de animais por id
  - Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro,
  - podendo receber um ou mais ids.
  @param ...ids: string - required
  return [{}] | []
*/
const animalsByIds = (...ids) => animals.filter(({ id }) => ids.includes(id));

/*
  TODO: 2. IMPLEMENTE A FUNÇÃO animalsOlderThan
  - Esta função, a partir do nome de uma espécie e uma idade mínima,
  - verifica se todos os animais daquela espécie possuem a idade mínima especificada
  @param species: string - required
  @param minAge: number - required
  return boolean
*/
const animalsOlderThan = (species, minAge) => (
  animals.find((animal) => animal.name === species).residents.every(({ age }) => age >= minAge)
);

module.exports = {
  animalsByIds,
  animalsOlderThan,
};
