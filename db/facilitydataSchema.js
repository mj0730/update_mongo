import mongoose from 'mongoose';

const facilitydataSchema = new mongoose.Schema(
  {
    facId: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    level: String,
    type: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    hours: String,
    travelDays: String,
    lat: String,
    long: String,
  },
  { collection: 'facilitydata', timestamps: true }
);

export default facilitydataSchema;
