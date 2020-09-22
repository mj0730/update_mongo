//SES 2020 Payscale max (applies to base and any COLA)
const PAY_CAP = 197300;

//Basic Pay Scale current Jan 2020
const BASIC_PAY = [
  {
    level: 4,
    pay: {
      cpc: [52918, 71438],
      d3: 49863,
    },
  },
  {
    level: 5,
    pay: {
      cpc: [60061, 81802],
      d3: 55219,
    },
  },
  {
    level: 6,
    pay: {
      cpc: [66370, 89598],
      d3: 59951,
      d2: 53531,
    },
  },
  {
    level: 7,
    pay: {
      cpc: [73338, 99006],
      d3: 65179,
      d2: 57017,
      d1: 48854,
    },
  },
  {
    level: 8,
    pay: {
      cpc: [81040, 109404],
      d3: 70953,
      d2: 60866,
      d1: 50781,
    },
  },
  {
    level: 9,
    pay: {
      cpc: [89546, 120887],
      d3: 77335,
      d2: 65119,
      d1: 52909,
    },
  },
  {
    level: 10,
    pay: {
      cpc: [102980, 139022],
      d3: 87407,
      d2: 71836,
      d1: 56267,
    },
  },
  {
    level: 11,
    pay: {
      cpc: [108382, 146318],
      d3: 91461,
      d2: 74540,
      d1: 57616,
    },
  },
  {
    level: 12,
    pay: {
      cpc: [113804, 153636],
      d3: 95527,
      d2: 77251,
      d1: 58972,
    },
  },
  {
    ag: 40694,
  },
];

//Locality 2020
const LOCALITY = {
  alaska: {
    fullName: `Alaska`,
    percentage: 0.2967,
    facilities: ['A11', 'ANC', 'FAI', 'JNU', 'MRI', 'ZAN'],
  },

  albany: {
    fullName: `Albany-Schenectady, NY-MA`,
    percentage: 0.1788,
    facilities: ['ALB'],
  },

  albuquerque: {
    fullName: `Albuquerque-Santa Fe, NM`,
    percentage: 0.1668,
    facilities: ['ABQ', 'ZAB'],
  },

  atlanta: {
    fullName: `Atlanta, GA`,
    percentage: 0.2216,
    facilities: ['A80', 'ATL', 'PDK', 'ZTL'],
  },

  austin: {
    fullName: `Austin, TX`,
    percentage: 0.1817,
    facilities: ['AUS'],
  },

  birmingham: {
    fullName: `Birmingham-Hoover-Talladega, AL`,
    percentage: 0.1626,
    facilities: ['BHM'],
  },

  boston: {
    fullName: `Boston, Worcester-Lawrence, Massachusetts-New Hampshire-Maine-Connecticut`,
    percentage: 0.2911,
    facilities: ['A90', 'BED', 'BOS', 'MHT', 'PVD', 'PWM', 'ZBW'],
  },

  buffalo: {
    fullName: `Buffalo`,
    percentage: 0.202,
    facilities: ['BUF'],
  },

  burlington: {
    fullName: `Burlington-South Burlington, VT`,
    percentage: 0.1689,
    facilities: ['BTV'],
  },

  charlotte: {
    fullName: `Charlotte-Concord, NC-SC`,
    percentage: 0.1744,
    facilities: ['CLT'],
  },

  chicago: {
    fullName: `Chicago-Naperville, IL-IN-WI`,
    percentage: 0.2859,
    facilities: ['ARR', 'C90', 'DPA', 'MDW', 'ORD', 'PWK', 'ZAU'],
  },

  cincinnati: {
    fullName: `Cincinnati-Hamilton, Ohio-Kentucky-Indiana`,
    percentage: 0.2055,
    facilities: ['CVG'],
  },

  cleveland: {
    fullName: `Cleveland-Akron, Ohio`,
    percentage: 0.2082,
    facilities: ['CAK', 'CLE', 'ZOB'],
  },

  coloradoSprings: {
    fullName: `Colorado Springs, CO`,
    percentage: 0.1778,
    facilities: ['COS', 'PUB'],
  },

  columbus: {
    fullName: `Columbus, Ohio`,
    percentage: 0.2002,
    facilities: ['CMH'],
  },

  corpusChristi: {
    fullName: `Corpus Christi, TX`,
    percentage: 0.1656,
    facilities: ['CRP'],
  },

  dallas: {
    fullName: `Dallas-Fort Worth, Texas`,
    percentage: 0.2468,
    facilities: ['ADS', 'AFW', 'D10', 'DAL', 'DFW', 'FTW', 'ZFW'],
  },

  davenport: {
    fullName: `Davenport-Moline, IA-IL`,
    percentage: 0.1704,
    facilities: ['MLI'],
  },

  dayton: {
    fullName: `Dayton-Springfield, Ohio`,
    percentage: 0.1918,
    facilities: ['DAY'],
  },

  denver: {
    fullName: `Denver-Boulder-Greeley, Colorado`,
    percentage: 0.2713,
    facilities: ['APA', 'BJC', 'D01', 'DEN', 'ZDV'],
  },

  detroit: {
    fullName: `Detroit-Ann Arbor-Flint, Michigan`,
    percentage: 0.2732,
    facilities: ['ARB', 'D21', 'DTW', 'FNT', 'PTK', 'YIP'],
  },

  harrisburg: {
    fullName: `Harrisburg-Lebanon, PA`,
    percentage: 0.172,
    facilities: ['MDT'],
  },

  hartford: {
    fullName: `Hartford, Connecticut (including all of New London County, CT)`,
    percentage: 0.2949,
    facilities: ['BDL', 'Y90'],
  },

  hawaii: {
    fullName: `Hawaii`,
    percentage: 0.1956,
    facilities: ['HCF', 'ITO', 'OGG'],
  },

  houston: {
    fullName: `Houston-The Woodlands, TX`,
    percentage: 0.3332,
    facilities: ['DWH', 'HOU', 'I90', 'IAH', 'ZHU'],
  },

  huntsville: {
    fullName: `Huntsville, Alabama`,
    percentage: 0.1985,
    facilities: ['HSV'],
  },

  indianapolis: {
    fullName: `Indianapolis, Indiana`,
    percentage: 0.1692,
    facilities: ['IND', 'ZID'],
  },

  kansasCity: {
    fullName: `Kansas City, MO-KS`,
    percentage: 0.1713,
    facilities: ['MCI', 'MKC', 'ZKC'],
  },

  laredo: {
    fullName: `Laredo, TX`,
    percentage: 0.1888,
    facilities: [],
  },

  lasVegas: {
    fullName: `Las Vegas-Henderson, NV-AZ`,
    percentage: 0.1768,
    facilities: ['L30', 'LAS', 'VGT'],
  },

  losAngeles: {
    fullName: `Los Angeles-Riverside-Orange County, California `,
    percentage: 0.3241,
    facilities: [
      'BFL',
      'BUR',
      'CMA',
      'CNO',
      'EMT',
      'JCF',
      'LAX',
      'LGB',
      'ONT',
      'POC',
      'PSP',
      'SBA',
      'SNA',
      'SMO',
      'TOA',
      'VNY',
      'ZLA',
    ],
  },

  miami: {
    fullName: `Miami-Fort Lauderdale, Florida`,
    percentage: 0.2351,
    facilities: ['FLL', 'FPR', 'FXE', 'MIA', 'PBI', 'TMB', 'VRB', 'ZMA'],
  },

  milwaukee: {
    fullName: `Milwaukee-Racine, Wisconsin`,
    percentage: 0.2096,
    facilities: ['MKE'],
  },

  minneapolis: {
    fullName: `Minneapolis-St. Paul, Minnesota-Wisconsin`,
    percentage: 0.2466,
    facilities: ['FCT', 'M98', 'MIC', 'MSP', 'STP', 'ZMP'],
  },

  newYork: {
    fullName: `New York-Northern New Jersey-Long Island, New York-New Jersey-Connecticut-Pennsylvania`,
    percentage: 0.3398,
    facilities: ['ABE', 'CDW', 'EWR', 'FRG', 'HPN', 'ISP', 'JFK', 'LGA', 'MMU', 'N90', 'POU', 'TEB', 'ZNY'],
  },

  omaha: {
    fullName: `Omaha, NE`,
    percentage: 0.1633,
    facilities: ['OMA', 'R90'],
  },

  palmBay: {
    fullName: `Palm Bay, Florida`,
    percentage: 0.1673,
    facilities: [],
  },

  philadelphia: {
    fullName: `Philadelphia-Wilmington-Atlantic City, Pennsylvania-New Jersey-Delaware-Maryland`,
    percentage: 0.2604,
    facilities: ['ACY', 'ILG', 'PHL', 'PNE', 'RDG'],
  },

  phoenix: {
    fullName: `Phoenix, Arizona`,
    percentage: 0.2012,
    facilities: ['DVT', 'FFZ', 'P50', 'PHX', 'SDL'],
  },

  pittsburgh: {
    fullName: `Pittsburgh, Pennsylvania`,
    percentage: 0.194,
    facilities: ['AGC', 'PIT'],
  },

  portland: {
    fullName: `Portland-Salem, Oregon-Washington`,
    percentage: 0.2374,
    facilities: ['HIO', 'P80', 'PDX'],
  },

  raleigh: {
    fullName: `Raleigh, North Carolina`,
    percentage: 0.2049,
    facilities: ['FAY', 'RDU'],
  },

  richmond: {
    fullName: `Richmond-Petersburg, Virginia`,
    percentage: 0.1995,
    facilities: ['RIC'],
  },

  sacramento: {
    fullName: `Sacramento-Yolo, California`,
    percentage: 0.2637,
    facilities: ['NCT', 'SMF'],
  },

  sanAntonio: {
    fullName: `San Antonio-New Braunfels-Pearsall, TX`,
    percentage: 0.1677,
    facilities: ['SAT'],
  },

  sanDiego: {
    fullName: `San Diego, California`,
    percentage: 0.2977,
    facilities: ['CRQ', 'MYF', 'SCT', 'SEE', 'SAN'],
  },

  sanFrancisco: {
    fullName: `San Francisco-Oakland-San Jose, California`,
    percentage: 0.4144,
    facilities: ['APC', 'CCR', 'HWD', 'LVK', 'MRY', 'OAK', 'PAO', 'RHV', 'SCK', 'SFO', 'SJC', 'STS', 'ZOA'],
  },

  seattle: {
    fullName: `Seattle-Tacoma-Bremerton, Washington`,
    percentage: 0.2702,
    facilities: ['BFI', 'PAE', 'S46', 'SEA', 'ZSE'],
  },

  stLouis: {
    fullName: `St Louis-St Charlies-Farmingron, MO-IL`,
    percentage: 0.1765,
    facilities: ['CPS', 'STL', 'SUS', 'T75'],
  },

  tucson: {
    fullName: `Tucson, AZ`,
    percentage: 0.1719,
    facilities: ['TUS', 'U90'],
  },

  virginiaBeach: {
    fullName: `Virginia Beach-Norfolk, VA-NC`,
    percentage: 0.1651,
    facilities: ['ORF'],
  },

  washington: {
    fullName: `Washington-Baltimore, District of Columbia-Maryland-Virginia-West Virginia`,
    percentage: 0.3048,
    facilities: ['ADW', 'BWI', 'DCA', 'HEF', 'IAD', 'PCT', 'ZDC'],
  },

  rus: {
    fullName: `Rest of United States`,
    percentage: 0.1595,
    facilities: [], //Do not enter anything
  },
};

//Facility list
const FACILITIES = require('./createFacilityDataObject');

//COLA 2020
const COLA_LIST = ['A11', 'ANC', 'MRI', 'ZAN', 'FAI', 'JNU', 'HCF', 'ITO', 'OGG', 'SJU', 'ZSU', 'STT', 'ZUA'];
const COLA = {
  anchorage: {
    percentage: 0.0286,
    facilities: ['A11', 'ANC', 'MRI', 'ZAN'],
  },

  fairbanks: {
    percentage: 0.0286,
    facilities: ['FAI'],
  },

  juneau: {
    percentage: 0.0286,
    facilities: ['JNU'],
  },

  otherAlaska: {
    percentage: 0.044,
    facilities: [],
  },

  honolulu: {
    percentage: 0.1028,
    facilities: ['HCF'],
  },

  hawaii: {
    percentage: 0.0442,
    facilities: ['ITO'],
  },

  kauai: {
    percentage: 0.1028,
    facilities: [],
  },

  maui: {
    percentage: 0.1028,
    facilities: ['OGG'],
  },

  puertoRico: {
    percentage: 0.0313,
    facilities: ['SJU', 'ZSU'],
  },

  virginIslands: {
    percentage: 0.1262,
    facilities: ['STT'],
  },

  guam: {
    percentage: 0.1262,
    facilities: ['ZUA'],
  },
};

//CIP
const CIP = {
  A90: 0.075,
  ACK: 0.08,
  ACY: 0.017,
  ADS: 0.02,
  ADW: 0.059,
  APA: 0.029,
  APC: 0.1,
  ARB: 0.053,
  ARR: 0.063,
  ASE: 0.08,
  BDL: 0.057,
  BED: 0.1,
  BFI: 0.057,
  BJC: 0.036,
  BOS: 0.075,
  BUR: 0.1,
  BWI: 0.017,
  C90: 0.08,
  CCR: 0.1,
  CDW: 0.1,
  CMA: 0.085,
  CNO: 0.02,
  CRQ: 0.071,
  D01: 0.032,
  D21: 0.024,
  DAL: 0.025,
  DCA: 0.033,
  DEN: 0.032,
  DPA: 0.056,
  DTW: 0.024,
  EMT: 0.1,
  EWR: 0.084,
  FAI: 0.08,
  FCM: 0.056,
  FRG: 0.1,
  GCN: 0.08,
  GRR: 0.011,
  HEF: 0.066,
  HIO: 0.015,
  HPN: 0.1,
  HWD: 0.1,
  IAD: 0.046,
  ISP: 0.1,
  JFK: 0.1,
  K90: 0.073,
  LAN: 0.011,
  LAX: 0.081,
  LGA: 0.1,
  LGB: 0.1,
  LVK: 0.1,
  M98: 0.042,
  MDW: 0.08,
  MIC: 0.056,
  MKE: 0.023,
  MMU: 0.067,
  MRY: 0.1,
  MSN: 0.007,
  MSP: 0.042,
  MYF: 0.072,
  N90: 0.1,
  NCT: 0.032,
  OAK: 0.1,
  OGG: 0.037,
  ONT: 0.022,
  ORD: 0.1,
  P80: 0.009,
  PAE: 0.031,
  PAO: 0.1,
  PCT: 0.046,
  PDX: 0.009,
  PHL: 0.031,
  PNE: 0.064,
  POC: 0.1,
  POU: 0.028,
  PSP: 0.036,
  PTK: 0.02,
  PVD: 0.056,
  PWK: 0.1,
  PWM: 0.015,
  RHV: 0.1,
  RNO: 0.014,
  ROC: 0.019,
  S46: 0.07,
  SAN: 0.07,
  SBA: 0.1,
  SCK: 0.014,
  SCT: 0.074,
  SEA: 0.07,
  SEE: 0.071,
  SFO: 0.1,
  SJC: 0.1,
  SJU: 0.04,
  SMF: 0.035,
  SMO: 0.1,
  SNA: 0.068,
  STP: 0.033,
  STS: 0.1,
  TEB: 0.1,
  TMB: 0.036,
  TOA: 0.1,
  TUS: 0.017,
  U90: 0.014,
  VNY: 0.1,
  Y90: 0.046,
  YIP: 0.04,
  ZAU: 0.051,
  ZDC: 0.046,
  ZMA: 0.018,
  ZNY: 0.1,
  ZOA: 0.1,
  ZSE: 0.031,
  ZSU: 0.031,
};

//Differential
const DIFFERENTIAL = {
  ACK: ['Affordability', LOCALITY.boston.percentage],
  ASE: ['Affordability', LOCALITY.denver.percentage],
  ZUA: ['Post', 0.2],
};

//Construct BASIC PAY scale
function getBasicPay(facility) {
  //retrieve the facility basic pay
  let basicPayScale = BASIC_PAY[FACILITIES[facility].level - 4];
  let cpcMax = basicPayScale.pay.cpc[1];
  let cpcMin = basicPayScale.pay.cpc[0];
  let d3 = basicPayScale.pay.d3 || 0;
  let d2 = basicPayScale.pay.d2 || 0;
  let d1 = basicPayScale.pay.d1 || 0;
  let ag = BASIC_PAY[9].ag;

  //construct an array with the pay scale, highest to lowest.
  return [cpcMax, cpcMin, d3, d2, d1, ag];
}

//Match locality area
function getLocality(fac) {
  for (let key in LOCALITY) {
    let locAreaCheck = LOCALITY[key].facilities;

    if (locAreaCheck.length > 0) {
      for (let i = 0; i < locAreaCheck.length; i++) {
        if (locAreaCheck[i] === fac) {
          return [LOCALITY[key].fullName, LOCALITY[key].percentage];
        }
      }
    } else {
      continue;
    }
  }

  return [LOCALITY.rus.fullName, LOCALITY.rus.percentage];
}

//Create BASE PAY scale
function getBasePay(callback, facility) {
  const localityResult = getLocality(facility);
  let locRate = 1 + localityResult[1];

  //multiply locality with the basic pay
  const basePayTable = callback(facility).map((x) => Math.round(x * locRate));

  //cap at federal maximum
  for (let i = 0; i < basePayTable.length; i++) {
    if (basePayTable[i] > PAY_CAP) {
      basePayTable[i] = PAY_CAP;
    }
  }

  return basePayTable;
}

//Find CIP or return 0
function getCip(facility) {
  //edge case for N90 handled in final table function
  //All others
  for (let key in CIP) {
    if (key === facility) {
      return CIP[key];
    }
  }
  return 0;
}

//Check for COLA and return multipler if it exists
function getCola(facility) {
  if (COLA_LIST.indexOf(facility) > -1) {
    for (let key in COLA) {
      let colaArea = COLA[key].facilities;
      for (let i = 0; i < colaArea.length; i++) {
        if (colaArea[i] === facility) {
          return COLA[key].percentage;
        }
      }
    }
  }

  return 0;
}

//Check for differential and return the modifier and type of differential, if it exists
//afford diff is greater of base X 10%, or base X (difference in locality)
//if old locality + .1 < new locality, use new locality
function getAffordabilityDifferential(facility, payTable) {
  const localityResult = getLocality(facility);
  let localityDifference = DIFFERENTIAL[facility][1] - localityResult[1];
  let differentialAmount = [];

  if (localityDifference > 0.1) {
    payTable.forEach((x) => {
      differentialAmount.push(Math.round(x * localityDifference));
    });
    return { amount: differentialAmount, percentage: localityDifference };
  } else {
    payTable.forEach((x) => {
      differentialAmount.push(Math.round(x * 0.1));
    });
    return { amount: differentialAmount, percentage: localityDifference };
  }
}
//pay is cola, plus (post diff-cola), capped at post diff
function getPostDifferntial(facility, payTable) {
  const postDifference = DIFFERENTIAL[facility][1] - getCola(facility);

  const modifiedPayTable = payTable.map((x) => Math.round(x * postDifference));

  return { amount: modifiedPayTable, percentage: postDifference, postDiff: DIFFERENTIAL[facility][1] };
}

function getDifferentialType(facility) {
  for (let key in DIFFERENTIAL) {
    if (key === facility) {
      return DIFFERENTIAL[key][0];
    }
  }
  return undefined;
}

//Compile all the pay information
function completePayTable(facility) {
  if (facility.length !== 3 || typeof facility !== 'string') {
    console.error('ERROR: Input is incorrect type or length');
  }

  facility = facility.toUpperCase();

  //const locPercent = getLocPercent(facility);
  const [locArea, locPercent] = getLocality(facility);
  const locCorrected = locPercent * 100; //this is where the percentage can be corrected to 2 decimal places

  const basePayTable = getBasePay(getBasicPay, facility);

  let cipPercentage = getCip(facility) * 100 || 0;
  let cipAmounts = [];
  basePayTable.forEach((element) => {
    cipAmounts.push(Math.round((element * cipPercentage) / 100));
  });

  //COLA is subject to the payscale max
  let colaPercentage = (getCola(facility) * 100).toFixed(2);
  let colaAmounts = basePayTable.map((x) => Math.round((x * colaPercentage) / 100));

  //enforce pay cap with cola
  if (colaPercentage > 0) {
    basePayTable.map((x) => (x > PAY_CAP ? (x = PAY_CAP) : (x = x)));
  }

  let differentialAmount, differentialType;
  if (getDifferentialType(facility)) {
    //check which type. if its afford, run that function
    differentialType = getDifferentialType(facility);

    if (differentialType === 'Affordability') {
      differentialAmount = getAffordabilityDifferential(facility, basePayTable);
      //else run post diff function
    } else {
      differentialAmount = getPostDifferntial(facility, basePayTable);
    }
  } else {
    differentialAmount = 0;
  }

  //add N90 temporary CIP
  if (facility === 'N90') {
    const N90CIP = [0.25, 0.25, 0.22, 0.18, 0.14];
    for (let i = 0; i < N90CIP.length; i++) {
      cipPercentage = 25;
      cipAmounts[i] = Math.round(basePayTable[i] * N90CIP[i]);
    }
  }

  return {
    PayTable: basePayTable,
    'CIP%': cipPercentage,
    CIP: cipAmounts,
    'COLA%': colaPercentage,
    COLA: colaAmounts,
    differentialType: differentialType,
    differentialAmount: differentialAmount.amount,
    differentialPercentage: differentialAmount.percentage,
    'LOC%': locCorrected,
    locArea: locArea,
  };
}

module.exports = { FACILITIES, LOCALITY, COLA, CIP, DIFFERENTIAL, completePayTable, getLocality };
