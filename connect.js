const mongoose = require('mongoose');
const uri = require('./secret.js');
const localhost = 'mongodb://localhost:27017/p65';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('*** Database Connected ***'));

const paySchema = new mongoose.Schema(
  {
    fac_id: {
      type: String,
      required: true,
      unique: true,
    },
    CPCMAX: Number,
    CPC: Number,
    D3: Number,
    D2: Number,
    D1: Number,
    AG: Number,
    'LOC%': String,
    locArea: String,
    'CIP%': String,
    CIPCPCMAX: Number,
    CIPCPC: Number,
    CIPD3: Number,
    CIPD2: Number,
    CIPD1: Number,
    CIPAG: Number,
    'COLA%': String,
    COLACPCMAX: Number,
    COLACPC: Number,
    COLAD3: Number,
    COLAD2: Number,
    COLAD1: Number,
    COLAAG: Number,
    differentialType: String,
    DIFCPCMAX: Number,
    DIFCPC: Number,
    DIFD3: Number,
    DIFD2: Number,
    DIFD1: Number,
    DIFAG: Number,
    differentialPercentage: Number,
  },
  { collection: 'pay' },
  { timestamps: true }
);

const facilitydataSchema = new mongoose.Schema(
  {
    facId: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    level: Number,
    type: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    hours: String,
    travelDays: Number,
    lat: String,
    long: String,
  },
  { collection: 'facilitydata' },
  { timestamps: true }
);

const pptdataSchema = new mongoose.Schema(
  {
    'Service Area': String,
    District: String,
    'Facility Type': String,
    Level: Number,
    'Facility ID': String,
    'Facility Name': String,
    'CPC Target': Number,
    'Current # of CPC On-Board': Number,
    'CPC on Temp': Number,
    'CPC on Long Term Hold': Number,
    'Current # of CPC On-Board minus Temps minus LTH': Number,
    'Current % CPC to Target': String,
    'Training Time Years': Number,
    'ATCS in Training': Number,
    'ATCS in Training on Long Term Hold': Number,
    'ATCS in Training minus LTH': Number,
    'Training Success Rate': String,
    'Current ATCS in Training Expected to Cert': Number,
    'Committed ATCS Inbound': Number,
    'Placement List Inbounds': Number,
    'Temps Inbound': Number,
    'Inbounds Expected to Cert + Temps Inbound': Number,
    'Committed ATCS Outbound': Number,
    'Placement List Outbounds': Number,
    'Temps Outbound': Number,
    'Projected Retirements and Other Losses': Number,
    'Projected % to Target': String,
    'Possible Gains to National Average': Number,
    'Possible Gains to Target': Number,
    'ERR Category': String,
    'Possible Losses': Number,
    'Current % CPC to Trainees': String,
    TNE: Number,
    AG: Number,
    Dev1: Number,
    Dev2: Number,
    Dev3: Number,
    'Dev Total': Number,
    CPCIT0: Number,
    CPCIT1: Number,
    CPCIT2: Number,
    CPCIT3: Number,
    'CPCIT Total': Number,
    HRRegion: String,
    CoreAirport: String,
    Type: Number,
  },
  { collection: 'pptdata' },
  { timestamps: true }
);

const Fac = mongoose.model('Facilitydata', facilitydataSchema);
const Pay = mongoose.model('Pay', paySchema);
const Ppt = mongoose.model('Pptdata', pptdataSchema);

module.exports = { db, Fac, Pay, Ppt };
