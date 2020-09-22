const jsonData = require('./json/facilityData.json');

const data = {};

jsonData.forEach((x) => {
  data[x['facId']] = x;
  data[x['facId']].travelDays = Number.parseInt(x.travelDays) || 'X';
  data[x['facId']].level = Number.parseInt(x.level);
});
console.log(data);

module.exports = data;
