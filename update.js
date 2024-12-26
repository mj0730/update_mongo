const writeFacToDb = require('./updateFac');
const { writePayToDb, facilityList } = require('./updatePay');
const writePptToDb = require('./updatePpt'); //handled by web interface now

async function main() {
  try {
    await writeFacToDb();
    await writePayToDb(facilityList);
    await writePptToDb();
    console.log('Files uploaded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error uploading files:', error);
    process.exit(1);
  }
}

main();
