// Definition of the speakers collection

import { Mongo } from 'meteor/mongo';
import { speakerSchema } from './schema.js';

export const Speakers = new Mongo.Collection('speakers');
Speakers.attachSchema(speakerSchema);
