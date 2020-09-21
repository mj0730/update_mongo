const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const FILES = ['ppt', 'facilityData'];

function writeToJson(data, fileName) {
  fs.writeFile(`./json/${fileName}.json`, data, (err) => {
    if (err) console.error(err);
    else console.log(`Writing ${fileName}.json`);
  });
}

function updateAll(array) {
  for (let i = 0; i < array.length; i++) {
    let file = path.resolve(__dirname, 'csv', `${array[i]}.csv`);
    const results = [];

    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`Reading... ${file}`);
        writeToJson(JSON.stringify(results), array[i]);
      });
  }
}

updateAll(FILES);
