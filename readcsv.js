//https://nodejs.org/api/esm.html#no-__filename-or-__dirname

import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const __dirname = path.resolve();
const FILES = fs.readdirSync(path.join(__dirname, 'csv'), (err, files) => {
  if (err) console.error(`ERROR: ${err}`);
  return files;
});

function writeToJson(data, fileName) {
  let file = fileName.split('.')[0];

  fs.writeFile(`./json/${file}.json`, data, (err) => {
    if (err) console.error(err);
    else console.log(`Writing ${file}.json`);
  });
}

function updateAll(array) {
  for (let i = 0; i < array.length; i++) {
    let file = path.resolve(__dirname, 'csv', array[i]);
    const results = [];

    fs.createReadStream(file)
      .pipe(
        csv({
          mapHeaders: ({ header }) => header.trim(),
          mapValues: ({ value }) => value.trim(),
        })
      )
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(`Reading... ${file}`);
        writeToJson(JSON.stringify(results), array[i]);
      });
  }
}

updateAll(FILES);
