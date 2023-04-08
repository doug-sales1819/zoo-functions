const { species, hours } = require('../data/zoo_data');

const getAvailability = (specie) => (
  species.find(({ name }) => name === specie).availability
);

const scheduleOfAnimals = (day) => (
  species.filter(({ availability }) => availability.includes(day)).map(({ name }) => name)
);

const getOfficeHour = (day) => {
  const { open, close } = hours[day];
  return (open && close) === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`;
};

const zooSchedule = () => {
  const daysOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  return daysOfWeek.reduce((acc, day) => {
    const availability = scheduleOfAnimals(day);
    acc[day] = {
      officeHour: getOfficeHour(day),
      exhibition: availability.length === 0 ? 'The zoo will be closed!' : availability,
    };
    return acc;
  }, {});
};

const getSchedule = (scheduleTarget) => {
  const schedule = zooSchedule();
  const animals = species.map(({ name }) => name);

  if (!scheduleTarget) {
    return schedule;
  }
  if (animals.includes(scheduleTarget)) {
    return getAvailability(scheduleTarget);
  }
  if (scheduleTarget in schedule) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  return schedule;
};

module.exports = getSchedule;
