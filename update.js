import updateFac from './updateFac.js';
import updatePay, { facilityList } from './updatePay.js';
import updatePpt from './updatePpt.js';

async function runAll(facilities) {
  const facStatus = await updateFac();
  const payStatus = await updatePay(facilities);
  const pptStatus = await updatePpt();

  if (facStatus + payStatus + pptStatus === 0) {
    console.log('DB Update complete');
    process.exit(0);
  }

  console.error(`There was an error: Fac = ${facStatus}, Pay = ${payStatus}, PPT = ${pptStatus}`);
  process.exit(1);
}

runAll(facilityList);
