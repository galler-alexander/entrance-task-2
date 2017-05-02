// Definition of the hall schedules collection

import { Mongo } from 'meteor/mongo';
import { hallScheduleSchema } from './schema.js';

export const HallSchedules = new Mongo.Collection('hall-schedules');
HallSchedules.attachSchema(hallScheduleSchema);
