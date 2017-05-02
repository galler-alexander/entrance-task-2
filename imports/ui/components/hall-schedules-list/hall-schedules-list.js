import { HallSchedules } from '/imports/api/hall-schedules/hall-schedules.js';
import { Meteor } from 'meteor/meteor';
import './hall-schedules-list.html';
import './hall-schedules-list.css';

Template.hallSchedulesList.onCreated(function() {
  Meteor.subscribe('hall-schedules.all');
});

Template.hallSchedulesList.helpers({
  hallschedules() {
    return HallSchedules.find({}, { sort: { startDateTime: -1 } });
  },
  formatDateTimeIntervalPart1(startDateTime, endDateTime) {
    let result;
    if (
      moment(startDateTime).format('D MMMM') ==
      moment(endDateTime).format('D MMMM')
    ) {
      result = moment(startDateTime).format('D MMMM,');
    } else {
      result = moment(startDateTime).format('D MMMM, HH:mm');
    }
    return result;
  },
  formatDateTimeIntervalPart2(startDateTime, endDateTime) {
    let result;
    if (
      moment(startDateTime).format('D MMMM') ==
      moment(endDateTime).format('D MMMM')
    ) {
      result =
        moment(startDateTime).format('HH:mm') +
        ' - ' +
        moment(endDateTime).format('HH:mm');
    } else {
      result = ' - ' + moment(endDateTime).format('D MMMM, HH:mm');
    }
    return result;
  }
});

// Template.info.events({
//   'submit .info-link-add'(event) {
//     event.preventDefault();
//
//     const target = event.target;
//     const title = target.title;
//     const url = target.url;
//
//     Meteor.call('links.insert', title.value, url.value, (error) => {
//       if (error) {
//         alert(error.error);
//       } else {
//         title.value = '';
//         url.value = '';
//       }
//     });
//   },
// });
