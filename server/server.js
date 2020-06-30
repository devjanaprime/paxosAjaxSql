// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const birds = require( './modules/birds.route' );
// uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'server/public' ) );
app.use( '/birds', birds );
// globals
const port = 5000;
// server up
app.listen( port, ()=>{
    console.log( 'server up:', port );
})