const { Schema, model, mongoose } = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionId: { 
    type: String,
    required: true
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},
{
  toJSON: {
    getters: true
  },
  id: false,
});

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Number,
    },
    thought: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    reactions: [reactionSchema]
    },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});



const Thought = model('thought', thoughtSchema);

module.exports = Thought;
