const mongoose = require( 'mongoose' );
const { ProfileSchema } = require( './profile.model' );

const UserSchema = new mongoose.Schema( {
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  registerDate: { type: Date, default: Date.now },
  groupIds: {
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: 'Group'
  }
  ,
  profile: { type: ProfileSchema }
} );

const User = mongoose.model( 'User', UserSchema, 'User' );

module.exports = { User, UserSchema };
