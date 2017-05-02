import SimpleSchema from 'simpl-schema';

export const hallSchema = new SimpleSchema({
  id: {
    type: String, //SimpleSchema.Integer,
    unique: true
  },
  name: {
    type: String,
    unique: true
  },
  desc: String,
  manCapacity: {
    type: SimpleSchema.Integer,
    min: 1
  }
});
