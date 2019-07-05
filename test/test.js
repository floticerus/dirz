const path = require( 'path' )

const dirz = require( path.join( __dirname, '../' ) )

dirz.set( 'test', __dirname )

require( path.join( __dirname, 'testfile' ) )
