// requires
const express = require( 'express' );
const router = express.Router();
const pool = require( './pool' );
// routes
router.get( '/', ( req, res )=>{
    console.log( '/birds GET' );
    /// - query: SELECT * FROM "birds" - ///
    let queryString = `SELECT * FROM "birds"`;
    pool.query( queryString ).then( ( result )=>{
        // success
        res.send( result.rows );
    }).catch( ( err )=>{
        // error
        res.send( 500 );
    })
}) // end /birds GET

router.post( '/', ( req, res )=>{
    console.log( 'in /birds POST:', req.body );
    res.send( 'growl' );
})
// export
module.exports = router;