const mongoose = require( 'mongoose' );

const CommentSchema = new mongoose.Schema( {
  commnent: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  postId: {
    type: Schema.Types.ObjectId,
    ref: "Post"
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'User'
  }
} );

const Comment = mongoose.model( 'Comment', CommentSchema, 'Comment' );

module.exports = { Comment, CommentSchema };
