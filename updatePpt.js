const { Ppt } = require('./db/connect.js');
const pptData = require('./json/ppt.json');

async function writePptToDb() {
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
  } catch (error) {
    console.error(error);
  }
}

module.exports = writePptToDb;
