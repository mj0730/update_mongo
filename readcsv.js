const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

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
