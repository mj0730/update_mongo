const mongoose = require('mongoose');
const uri = require('../secret.js');
const paySchema = require('./paySchema');
const facilitydataSchema = require('./facilitydataSchema');
const pptdataSchema = require('./pptdataSchema');
// const devDb = 'mongodb://192.168.0.123:27017/p65';

mongoose.connect(uri, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('*** Database Connected ***'));

const Fac = mongoose.model('Facilitydata', facilitydataSchema);
const Pay = mongoose.model('Pay', paySchema);
const Ppt = mongoose.model('Pptdata', pptdataSchema);

module.exports = { Fac, Pay, Ppt };
