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
  return Array [{}] | []
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

/*
  TODO: 3. IMPLEMENTE A FUNÇÃO employeeByName
  - função responsável pela busca das pessoas colaboradoras
  - através do primeiro ou do último nome delas
  @param employeeName: string - required
  return boolean

  * OBS: utiliza uma função auxiliar para diminuir a complexabilidade
*/
const findEmployee = (name) => {
  const dataFound = employees.find((employee) => [employee.firstName, employee.lastName]
    .join(' ')
    .match(name));
  return !dataFound ? {} : dataFound;
};

const employeeByName = (employeeName) => {
  if (!employeeName) return {};
  const employee = findEmployee(employeeName.trim());
  return employee;
};

/*
  TODO: 4. IMPLEMENTE A FUNÇÃO createEmployee
  - A função, a partir de informações recebidas nos parâmetros,
  - é capaz de criar um objeto equivalente ao de uma pessoa colaboradora,
  @param personalInfo: Object - required
  @param associatedWith: Object - required
  return Object {}
*/
const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

/*
  TODO: 5. IMPLEMENTE A FUNÇÃO isManager
  - Verifica se uma pessoa colaboradora, a partir de seu id, ocupa cargo de gerência.
  @param id: string - required
  return boolean
*/
const isManager = (id) => (employees.some(({ managers }) => managers.includes(id)));

/*
  TODO: 6. IMPLEMENTE A FUNÇÃO addEmployee
  - A função irá adicionar uma nova pessoa colaboradora ao array employees,
  - presente no arquivo data.js.
  @param props: Object - required
  return Object
*/
const checkProps = (props) => {
  const keys = ['id', 'firstName', 'lastName', 'managers', 'responsibleFor'];
  return keys.filter((key) => !(key in props));
};

const addEmployee = (props) => {
  if (!props) {
    throw new Error('no data to add');
  }
  const missingTheProperties = checkProps(props);
  if (missingTheProperties.length > 0) {
    return `props required not found: [${missingTheProperties}]`;
  }
  const employeeData = {
    id: props.id,
    firstName: props.firstName,
    lastName: props.lastName,
    managers: props.managers,
    responsibleFor: props.responsibleFor,
  };
  data.employees.push(employeeData);
  return employeeData;
};

module.exports = {
  animalsByIds,
  animalsOlderThan,
  employeeByName,
  createEmployee,
  isManager,
  addEmployee,
};
