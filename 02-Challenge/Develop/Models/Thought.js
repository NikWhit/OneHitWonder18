const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const Username = require(User);
//Schema for what makes up a thought
const thoughtSchema = new thoughtSchema({
//Content and criteria for the ThoughtSchema
    thoughtText: {
        type: String,
        minLength: 15,
      maxLength: 500,
    },
//This is the timestamp of the createdAt date
      createdAt: {
        type: Date,
        default: Date.now,
    },
//The username that created the thought
    username: [
        {
            type: Schema.username.ObjectId,
            ref: 'username',
        }],
//Array dof nested docs created with the reactionSchema
    reactions: [Reactions],
},)

thoughtSchema
    .virtual('timestamp')
    //getter
    .get(function(timestamp){
        return this.createdAt.timestamp;
    });

    reactionSchema.virtual('reactionCount').get(function () {
        return this.reaction.length;    
    });
//Initialize
const thought = model('thought', thoughtSchema);

module.exports = Thought;



//README Works Cited 18-NOSQL/01-Activites/23-Ins_Subdoc-Population/Models/Post.js
