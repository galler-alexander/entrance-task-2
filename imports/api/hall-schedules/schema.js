import SimpleSchema from 'simpl-schema';
import hallSchema from '../halls/schema.js';
import schoolSchema from '../schools/schema.js';
import speakerSchema from '../speakers/schema.js';

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.debug = true;

export const hallScheduleSchema = new SimpleSchema({
  id: {
    type: String, //SimpleSchema.Integer,
    unique: true
  }, //{"Id":"{\"hall-schedule__item\":{\"id\":4307,\"tags\":{}}} 4307
  title: {
    type: String,
    unique: true
  }, //Лекция 6. Клиентская оптимизация: мобильные устройства и инструменты
  url: {
    type: String,
    optional: true,
    regEx: SimpleSchema.RegEx.Url
  }, //https://events.yandex.ru/lib/talks/4307/
  desc: {
    type: String,
    optional: true
  },
  startDateTime: {
    type: Date,
    autoform: {
      value: new Date(),
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        //    format: 'dd.mm.yyyy',
        //    weekStart: 1,
        language: 'ru',
        autoclose: true,
        daysOfWeekDisabled: [0],
        todayHighlight: true,
        todayBtn: true
      },
      custom: function() {
        if (
          new Date(this.value) < new Date(this.field('startDateTime').value)
        ) {
          return 'startEndDatesMismatch';
        }
      }
    }
  },
  endDateTime: {
    type: Date,
    autoform: {
      value: new Date(),
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        //    format: 'dd.mm.yyyy',
        //    weekStart: 1,
        language: 'ru',
        autoclose: true,
        daysOfWeekDisabled: [0],
        todayHighlight: true,
        todayBtn: true
      },
      custom: function() {
        if (
          new Date(this.field('startDateTime').value) < new Date(this.value)
        ) {
          return 'datesMismatch';
        }
      }
    }
  },
  speakers_ids: {
    type: Array,
    minCount: 1
  },
  'speakers_ids.$': {
    type: String //speakerSchema
  },
  schools_ids: {
    type: Array,
    minCount: 1
  },
  'schools_ids.$': {
    type: String //schoolSchema
  },
  hall_id: {
    type: String//hallSchema
  }
});

// SimpleSchema.messages({
//   datesMismatch: 'Начальная дата должна быть меньше конечной'
// });

//check amount - capacity
//check date hall
//check date school
//check date speaker
//array unique
//clean
//autoform
