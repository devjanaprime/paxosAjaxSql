// requires
const express = require( 'express' );
const router = express.Router();
const pool = require( './pool' );
// routes
router.delete( '/:id' , ( req, res )=>{
    console.log( '/birds DELETE hit:', req.params.id );
    // have pool run a delete
    let queryString = `DELETE FROM "birds" WHERE "id"=${ req.params.id };`;
    pool.query( queryString ).then( ( results )=>{
        res.send( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.send( 500 );
    })
}) // end /birds DELETE route, DELETE query, "Delete" in CRUD 

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
}) // end /birds GET route, SELECT query, "Read" in CRUD

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
}) // end /birds POST route, INSERT query, "Create" in CRUD

router.put( '/:id', (req, res)=>{
    console.log( '/birds PUT:', req.body, req.params.id);
    // update first name of the bird with this ID
    const queryString = `UPDATE birds SET first_name='${ req.body.new_first_name }' WHERE id=${ req.params.id };`;
    pool.query( queryString ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}) // end /birds PUT, UPDATE query, "Update" in CRUD
// export
module.exports = router;