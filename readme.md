Full Stack w/ AJAX/SQL
===

Phase 1: setup

- setup your usual node/express/jQuery project
- make sure to npm install "pg" as well as "express" (pg will allow us to run SQL queries on the server)

Phase 2:

- create "pool.pg" in modules folder

```
const pg = require( 'pg' );
const pool = new pg.Pool({
    database: 'DBNAME',
    host: 'localhost',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 30000
})
module.exports = pool;
```

- require this pool in any routes that would need to talk to the db

Phase 3: making GET & POST SQL queries on server:

- again, make sure to require "pool.js" in any server side script that would need to talk to the db
- basic GET w/ SELECT:

```
let queryString = 'SELECT * FROM TABLENAME';
pool.query( queryString ).then( ( result )=>{
    res.send( result.rows );
}).catch( ( err )=>{
    console.log( 'ERROR WITH GET', err );
    res.sendStatus( 500 );
}) // end 
```

- basic POST with INSERT
- the syntax looks weird here (using $1, $2, etc...) this is what we call "sanitizing inputs" and protects our code from SQL injection attacks. 
- here, we'll use an example object that has 2 keys: "name" & "color"

```
let queryString = 'INSERT INTRO TABLENAME ( "name", "color" ) VALUES ( $1, $2 )';
pool.query( queryString, [ req.body.name, req.body.color ] ).then( ( result )=>{
    res.sendStatus( 201 );
}).catch( ( err )=>{
    console.log( 'ERROR WITH POST', err );
    res.sendStatus( 500 );
}) // end
```