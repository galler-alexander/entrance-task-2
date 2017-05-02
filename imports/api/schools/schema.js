import SimpleSchema from 'simpl-schema';

export const schoolSchema = new SimpleSchema({
  id: {
    type: String,
    unique: true
  }, //frontend
  name: {
    type: String,
    unique: true
  }, //Школа разработки интерфейсов
  url: {
    type: String,
    regEx: SimpleSchema.RegEx.Url
  }, //https://academy.yandex.ru/events/management/
  manAmount: {
    type: SimpleSchema.Integer,
    min: 1
  }
});
