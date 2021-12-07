import { Ppt } from './db/connect.js';
// import pptData from './json/ppt.json';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pptData = require('./json/ppt.json');

export default async function writePptToDb() {
  try {
    await Ppt.bulkWrite(
      pptData.map((doc) => ({
        updateOne: {
          filter: { 'Facility ID': doc['Facility ID'] },
          update: { $set: doc },
          upsert: true,
        },
      }))
    );
    console.log('** PPT write complete **');
    return 0;
  } catch (error) {
    console.error(error);
    return 1;
  }
}
