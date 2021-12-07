import mongoose from 'mongoose';
import uri from '../secret.js';
import paySchema from './paySchema.js';
import facilitydataSchema from './facilitydataSchema.js';
import pptdataSchema from './pptdataSchema.js';
// const devDb = 'mongodb://192.168.0.123:27017/p65';

mongoose.connect(uri, {});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error: '));
db.once('open', () => console.log('*** Database Connected ***'));

const Fac = mongoose.model('Facilitydata', facilitydataSchema);
const Pay = mongoose.model('Pay', paySchema);
const Ppt = mongoose.model('Pptdata', pptdataSchema);

export { Fac, Pay, Ppt };
