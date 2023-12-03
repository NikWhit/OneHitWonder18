const mongoose = require('mongoose');

// Schema to create user model
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
  
    email: { 
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
      Thought: [{ 
          type: mongoose.Schema.Thought.ObjectId, 
          ref: 'Thoughts'
        }],
      Friends: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Friends'
      }],
    },
  {
    toJSON: {
      virtual: true,
      getters: true,
    },
  }
);

userSchema.virtual('friendCount')
.get(function() {
  return this.friends.length
});

const User = mongoose.model('user', userSchema);

module.exports = User;
