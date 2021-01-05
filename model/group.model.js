const mongoose = require( 'mongoose' );

const GroupSchema = new mongoose.Schema( {
  name: { type: String, required: true },
  description: { type: String },
  userIds: {
    type: [ mongoose.Schema.Types.ObjectId ],
    ref: 'User'
  }

} );

const Group = mongoose.model( 'Group', GroupSchema, 'Group' );

module.exports = { Group, GroupSchema };
