const mongoose = require('mongoose');
const uri = require('./secret.js');

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
    data: {
      PayTable: Array,
      'CIP%': Number,
      CIP: Array,
      'COLA%': String,
      COLA: Array,
      differentialType: String,
      differentialAmount: Array,
      differentialPercentage: Number,
    },
  },
  { collection: 'pay' }
);

const Pay = mongoose.model('Pay', paySchema);

module.exports = { db, Pay };
