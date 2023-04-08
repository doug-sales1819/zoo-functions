const { species } = require('../data/zoo_data');

const getProperty = (speciesData, { atribute, sorted }) => {
  const propertyData = speciesData.map((resident) => resident[atribute]);
  return sorted ? propertyData.sort((a, b) => a.localeCompare(b)) : propertyData;
};

const getSpeciesWithResidents = (speciesData, { atribute, sorted }) => (
  speciesData.map(({ name, residents }) => ({
    [name]: getProperty(residents, { atribute, sorted }),
  }))
);

const getResidentsByAttribute = (speciesData, { atribute, sorted, sex }) => (
  speciesData.map(({ name, residents }) => {
    const filteredSex = residents.filter((resident) => resident.sex === sex);
    return { [name]: getProperty(filteredSex, { atribute, sorted }) };
  })
);

const getSpeciesByLocation = (locale, { includeNames, sorted, sex }) => {
  const speciesByLocation = species.filter(({ location }) => location === locale);

  if (includeNames && sex) {
    return getResidentsByAttribute(speciesByLocation, { atribute: 'name', sorted, sex });
  }
  if (includeNames) {
    return getSpeciesWithResidents(speciesByLocation, { atribute: 'name', sorted });
  }
  return getProperty(speciesByLocation, { atribute: 'name' });
};

const getLocaleAnimals = ({ includeNames, sorted, sex }) => (
  species.reduce((acc, { location }) => {
    acc[location] = getSpeciesByLocation(location, { includeNames, sorted, sex });
    return acc;
  }, {})
);

const getAnimalMap = (options) => {
  const config = { includeNames: false, sorted: false, sex: '' };
  Object.assign(config, options);
  return getLocaleAnimals(config);
};

module.exports = getAnimalMap;
