// Definition of the halls collection

import { Mongo } from 'meteor/mongo';
import { hallSchema } from './schema.js';

export const Halls = new Mongo.Collection('halls');
Halls.attachSchema(hallSchema);
