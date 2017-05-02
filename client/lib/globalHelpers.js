Template.registerHelper('formatDate', (date, format = 'MM-DD-YYYY') => {
  return moment(date).format(format);
});

Template.registerHelper(
  'formatDateTimeInterval',
  (startDateTime, endDateTime) => {
    let result = moment(startDateTime).format('D MMMM, HH:mm') + ' - ';
    if (
      moment(startDateTime).format('D MMMM') ==
      moment(endDateTime).format('D MMMM')
    ) {
      result += moment(endDateTime).format('HH:mm');
    } else {
      result += moment(endDateTime).format('D MMMM, HH:mm');
    }
    return result;
  }
);
