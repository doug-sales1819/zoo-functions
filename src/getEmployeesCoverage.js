const { employees, species } = require('../data/zoo_data');

const getPropertyOfSpecies = (ids, propName) => (
  species.filter(({ id }) => ids.includes(id)).map((animal) => animal[propName])
);

const getDataEmployees = () => (
  employees.map(({ id, firstName, lastName, responsibleFor }) => (
    {
      id,
      fullName: `${firstName} ${lastName}`,
      species: getPropertyOfSpecies(responsibleFor, 'name'),
      locations: getPropertyOfSpecies(responsibleFor, 'location'),
    }
  ))
);

const findEmployeeByName = (name) => {
  const employeesList = getDataEmployees();
  const employee = employeesList.find(({ fullName }) => fullName.match(name));
  if (!employee) throw new Error('Informações inválidas');
  return employee;
};

const findEmployeeById = (employeeId) => {
  const employeesList = getDataEmployees();
  const employee = employeesList.find(({ id }) => id === employeeId);
  if (!employee) throw new Error('Informações inválidas');
  return employee;
};

const getEmployeesCoverage = (props) => {
  const employee = { name: '', id: '' };

  Object.assign(employee, props);

  if (!employee.id && !employee.name) {
    return getDataEmployees();
  }
  if (employee.name) {
    return findEmployeeByName(employee.name);
  }
  if (employee.id) {
    return findEmployeeById(employee.id);
  }
};

module.exports = getEmployeesCoverage;
