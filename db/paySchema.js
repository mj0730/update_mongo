import mongoose from 'mongoose';

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
  { collection: 'pay', timestamps: true }
);

export default paySchema;
