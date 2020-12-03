const mongoose = require('mongoose');

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
  { collection: 'facilitydata', timestamps: true }
);

module.exports = facilitydataSchema;
