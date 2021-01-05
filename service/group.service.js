const { Group } = require( '../model/group.model' );

/**
 * todo: Create Group
 */

const createGroup = ( name, description ) => {
  return Group.create( { name, description } );
};

const createGroup_C2 = async ( name, description ) => {
  try {
    const newGroup = new Group( { name, description } );
    const result = await newGroup.save();
    console.log( result );
  } catch ( error ) {
    console.log( error );
  }
};

/**
 * todo: read Group - show all || byId
 */

const readGroup = () => {
  return Group.find()
    .then( group => console.log( group ) )
    .catch( error => console.log( error ) );
};
const readGroupById = ( _id ) => {
  return Group.findById( _id )
    .then( ( group ) => {
      if ( !group ) throw new Error( 'group not found' );
      console.log( group );
    } )
    .catch( error => console.log( error ) );
};

/**
 * todo: replace||update Group
 */
const updateGroup = ( id, name, description ) => {
  return Group.findById( id )
    .then( ( group ) => {
      group.name = name;
      group.description = description;
      return group.save();
    } )
    .then( group => console.log( group ) )
    .catch( error => console.log( error ) );
};

/**
 * todo: delete Group
 */
const deleteGroup = ( _id ) => {
  let _group;
  return Group.findById( _id )
    .then( ( group ) => {
      _group = group;
      return group.deleteOne();
    } )
    .then( () => console.log( 'group: ', _group, 'was deleted !' )
    )
    .catch( error => console.log( error ) );
};

const deleteGroup_C2 = ( _id ) => {
  let _group;
  return Group.deleteOne( { _id } )
    .then( res => console.log( 'group: ', _group, 'was deleted !' ) )
    .catch( error => console.log( error ) );
};
module.exports = { createGroup, readGroup, updateGroup, deleteGroup, readGroupById };

