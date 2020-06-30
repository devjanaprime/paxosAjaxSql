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
    let queryString = `INSERT INTO "birds" ( "first_name", "last_name", "dob", "height" ) 
        VALUES ( $1, $2, $3, $4 )`;
    pool.query( queryString, 
        [ req.body.first_name, req.body.last_name , req.body.dob, req.body.height ] ).then( ( result )=>{
            res.sendStatus( 201 );
        }).catch( ( err )=>{
            console.log( err );
            res.sendStatus( 500 );
        }) //emd query
})
// export
module.exports = router;