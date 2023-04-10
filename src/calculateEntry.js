const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const counts = entrants.reduce((acc, visitant) => {
    if (visitant.age < 18) {
      acc.child += 1;
    } else if (visitant.age >= 18 && visitant.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });

  return counts;
};

const sumPrice = (visitants) => {
  const sum = visitants.reduce((acc, [visitant, value]) => acc + prices[visitant] * value, 0);
  return Number(sum.toFixed(2));
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitants = Object.entries(countEntrants(entrants));
  return sumPrice(visitants);
};

module.exports = { calculateEntry, countEntrants };
