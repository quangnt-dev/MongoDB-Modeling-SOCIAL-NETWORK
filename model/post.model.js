const mongoose = require( 'mongoose' );
const { LikeSchema } = require( './like.model' );

const PostSchema = new mongoose.Schema( {
  title: { type: String },
  content: { type: String },
  createdDate: { type: Date, default: Date.now },
  userId: {
    type: mongoose.Schema.Type.ObjectId,
    ref: 'User'
  },
  likes: [ LikeSchema ]
} );

const Post = mongoose.model( 'Post', PostSchema, 'Post' );

module.exports = { Post, PostSchema };
