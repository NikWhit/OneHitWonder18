const mongoose = require('mongoose');
const { Schema, model } = ('mongoose');
const Thought = require('Thought');
const  userSchema = new mongoose.Schema(
    { Username: String, required: true, unique: true, trim: true},
    { Email: String, required: true, unique: true, 
        validate: {
            validator: () => Promise.resolve(false),
            message: 'Email validation failed'
          }},
    { Thought: [{ type: Schema.Thought.ObjectId, ref: 'Thoughts'}],
    },  
    { Friends: [{ type: Schema.Types.ObjectId, ref: 'Friends'}] },
        {
            toJSON: {
                virtuals: true,
            },
            id: false,
            }
        );

        userSchema.virtual('friendCount').get(function () {
            return this.friends.length;
        });
    // const User = db.model('User', userSchema);
    const user = new User();
    
    user.email = 'test@test.co';
    user.name = 'test';
    
    let error;
    try {
      await user.validate();
    } catch (err) {
      error = err;
    }
    assert.ok(error);
    assert.equal(error.errors['name'].message, 'Oops!');
    assert.equal(error.errors['email'].message, 'Email validation failed');

    userSchema
    .virtual('fullName')
    //this is the go getter
    .get(function () {
        return `${this.first} ${this.last}`;
    })
    //This is the get setter
    .set(function (v) {
        const first = v.split (' ')[0];
        const last = v.split (' ')[1];
        this.set({ first, last});
    });
    //This initializes the user model schema
    const User = db.model('User', userSchema);

    module.exports = User;

    //README - Cite Source
    // https://mongoosejs.com/docs/validation.html#built-in-validators
    // UofU BootCamp 18-NoSQL/21-Ins_Virtuals