// All hall schedules-related publications

import { Meteor } from 'meteor/meteor';
import { HallSchedules } from '../hall-schedules.js';

Meteor.publish('hall-schedules.all', function() {
  //return HallSchedules;
  ReactiveAggregate(this, HallSchedules, [
    { $unwind: '$schools_ids' },
    {
      $lookup: {
        from: 'schools',
        localField: 'schools_ids',
        foreignField: 'id',
        as: 'schools'
      }
    },
    { $unwind: '$speakers_ids' },
    {
      $lookup: {
        from: 'speakers',
        localField: 'speakers_ids',
        foreignField: 'id',
        as: 'speakers'
      }
    },
    {
      $lookup: {
        from: 'halls',
        localField: 'hall_id',
        foreignField: 'id',
        as: 'hall'
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          id: '$id',
          title: '$title',
          url: '$url',
          startDateTime: '$startDateTime',
          endDateTime: '$endDateTime',
          desc: '$desc',
          speakers: '$speakers'
        },
        hall: { $first: '$hall' },
        schools: { $push: { $arrayElemAt: ['$schools', 0] } }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        title: '$_id.title',
        url: '$_id.url',
        startDateTime: '$_id.startDateTime',
        endDateTime: '$_id.endDateTime',
        desc: '$_id.desc',
        hall: { $arrayElemAt: ['$hall', 0] },
        schools: '$schools',
        speakers: '$_id.speakers'
      }
    },
    {
      $group: {
        _id: {
          _id: '$_id',
          id: '$id',
          title: '$title',
          url: '$url',
          startDateTime: '$startDateTime',
          endDateTime: '$endDateTime',
          desc: '$desc',
          hall: '$hall',
          schools: '$schools'
        },
        speakers: { $push: { $arrayElemAt: ['$speakers', 0] } }
      }
    },
    {
      $project: {
        _id: '$_id._id',
        title: '$_id.title',
        url: '$_id.url',
        startDateTime: '$_id.startDateTime',
        endDateTime: '$_id.endDateTime',
        desc: '$_id.desc',
        hall: '$_id.hall',
        schools: '$_id.schools',
        speakers: '$speakers'
      }
    }
  ]);
});
