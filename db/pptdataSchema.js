import mongoose from 'mongoose';

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
  { collection: 'pptdata', timestamps: true }
);

export default pptdataSchema;
