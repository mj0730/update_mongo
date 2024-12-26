const { Fac } = require('./db/connect.js');
const facData = require('./json/facilityData.json');

async function writeFacToDb() {
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
  } catch (error) {
    console.error(error);
  }
}

module.exports = writeFacToDb;
