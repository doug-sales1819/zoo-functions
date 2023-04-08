const { employees, species } = require('../data/zoo_data');

const getAnimalById = (animalId) => species.find(({ id }) => id === animalId);

const getOldestResident = (specie) => (
  specie.residents.reduce((acc, animal) => (animal.age > acc.age ? animal : acc))
);

const getEmployeeById = (employeeId) => employees.find(({ id }) => id === employeeId);

const getOldestFromFirstSpecies = (employeeId) => {
  const employee = getEmployeeById(employeeId);
  const firstSpecie = getAnimalById(employee.responsibleFor[0]);
  const olderAnimal = getOldestResident(firstSpecie);

  return Object.values(olderAnimal);
};

module.exports = getOldestFromFirstSpecies;
