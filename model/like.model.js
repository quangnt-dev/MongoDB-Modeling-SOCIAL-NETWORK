const mongoose = require( 'mongoose' );

const LikeSchema = new mongoose.Schema( {
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
} );

const Like = mongoose.model( 'Like', LikeSchema, 'Like' );

module.exports = { Like, LikeSchema };


