const { Schema, model } = require('mongoose');
const Schema = require('./Assignment');

// Schema to create Student model
const studentSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: { type: Schema.Types.ObjectId, ref: 'user' },
    },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
