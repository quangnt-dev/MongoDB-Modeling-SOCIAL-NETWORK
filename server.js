const mongoose = require( 'mongoose' );
const { createGroup, readGroup, updateGroup, deleteGroup, readGroupById } = require( './service/group.service' );


/**
 * todo: Connect to MongoDB
 */
mongoose.connect(
  `mongodb://localhost:27017/social-network`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then( () => console.log( 'Connected to MongoDB !' ) )
  .catch( ( err ) => console.log( 'error: ', err ) );


// ? Post request
// createGroup( "Group 1", "This is Group 1 " );
// readGroup();
// readGroupById( '5ff3f3eb9086504b054ff399' );
// updateGroup( '5ff3f136b4bb7442caf0c4fb', 'Group 1', 'Group 1 was updated !' );
// deleteGroup( '5ff3f136b4bb7442caf0c4fb' );
