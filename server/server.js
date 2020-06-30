// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'server/public' ) );
// globals
const port = 5000;
// server up
app.listen( port, ()=>{
    console.log( 'server up:', port );
})