// Definition of the schools collection

import { Mongo } from 'meteor/mongo';
import { schoolSchema } from './schema.js';

export const Schools = new Mongo.Collection('schools');
Schools.attachSchema(schoolSchema);
