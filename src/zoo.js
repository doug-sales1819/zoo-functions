/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

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
  @param id
*/
const animalsByIds = (...ids) => animals.filter(({ id }) => ids.includes(id));

