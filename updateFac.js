import { Fac } from './db/connect.js';
// import facData from './json/facilityData.json';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const facData = require('./json/facilityData.json');

export default async function writeFacToDb() {
  try {
    await Fac.bulkWrite(
      facData.map((doc) => ({
        updateOne: {
          filter: { facId: doc.facId },
          update: { $set: doc },
          upsert: true,
        },
      }))
    );
    console.log('** FacInfo write complete **');
    return 0;
  } catch (error) {
    console.error(error);
    return 1;
  }
}
