// requires
const express = require( 'express' );
const router = express.Router();
// routes
router.get( '/', ( req, res )=>{
    console.log( '/birds GET' );
    res.send( 'woof' );
}) // end /birds GET
// export
module.exports = router;