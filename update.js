const { completePayTable } = require('./facility_info.js');
const { db, Pay } = require('./connect.js');
const jsonData = require('./json/facilityData.json');

function createFacilityList(data, key) {
  const storage = [];

  for (let i = 0; i < data.length; i++) {
    storage.push(data[i][key]);
  }

  return storage;
}

const facilityList = createFacilityList(jsonData, 'facId');

function insertToDb(list) {
  const docs = [];

  for (let i = 0, len = list.length; i < len; i++) {
    let fac = list[i];
    let facData = completePayTable(fac);
    const [COLACPCMAX, COLACPC, COLAD3, COLAD2, COLAD1, COLAAG] = facData.COLA;
    const [CPCMAX, CPC, D3, D2, D1, AG] = facData.PayTable;
    const [CIPCPCMAX, CIPCPC, CIPD3, CIPD2, CIPD1, CIPAG] = facData.CIP;
    const differentialType = facData.differentialType || null;

    let [DIFCPCMAX, DIFCPC, DIFD3, DIFD2, DIFD1, DIFAG] = [null, null, null, null, null, null];

    if (facData.differentialType) {
      [DIFCPCMAX, DIFCPC, DIFD3, DIFD2, DIFD1, DIFAG] = facData.differentialAmount;
    }
    const differentialPercentage = facData.differentialPercentage;

    const doc = {
      fac_id: fac,
      CPCMAX: CPCMAX,
      CPC: CPC,
      D3: D3,
      D2: D2,
      D1: D1,
      AG: AG,
      'LOC%': facData['LOC%'],
      locArea: facData.locArea,
      'CIP%': facData['CIP%'],
      CIPCPCMAX: CIPCPCMAX,
      CIPCPC: CIPCPC,
      CIPD3: CIPD3,
      CIPD2: CIPD2,
      CIPD1: CIPD1,
      CIPAG: CIPAG,
      'COLA%': facData['COLA%'],
      COLACPCMAX: COLACPCMAX,
      COLACPC: COLACPC,
      COLAD3: COLAD3,
      COLAD2: COLAD2,
      COLAD1: COLAD1,
      COLAAG: COLAAG,
      differentialType: differentialType,
      DIFCPCMAX: DIFCPCMAX,
      DIFCPC: DIFCPC,
      DIFD3: DIFD3,
      DIFD2: DIFD2,
      DIFD1: DIFD1,
      DIFAG: DIFAG,
      differentialPercentage: differentialPercentage,
    };
    docs.push(doc);
  }

  Pay.bulkWrite(
    docs.map((doc) => ({
      updateOne: {
        filter: { fac_id: doc.fac_id },
        update: { $set: doc },
        upsert: true,
      },
    }))
  );
  console.log('** Job Complete **');
}

insertToDb(facilityList);
