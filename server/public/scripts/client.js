$( document ).ready( onReady );


function addBird(){
    // get user input and place into an object
    const birdToSend = {
        first_name: $( '#first_nameIn' ).val(),
        last_name: $( '#last_nameIn' ).val(),
        dob: $( '#dobIn' ).val(),
        height: $( '#heightIn' ).val(),
    }
    console.log( 'sending:', birdToSend );
    // send the data to the server via POST
    $.ajax({
        type: 'POST',
        url: '/birds',
        data: birdToSend
    }).then( function( response ){
        console.log( 'back from POST:', response );
        getBirds();
    }).catch( function( err ){
        console.log( err );
        alert( 'no workly' );
    }) // end AJAX
}

function deleteBird(){
    console.log( 'in deleteBird' );
}

function onReady(){
    getBirds();
    $( '#addBirdButton' ).on( 'click', addBird );
    $( '#birdsOut' ).on( 'click', '.deleteBirdButton', deleteBird );
}

function getBirds(){
    $.ajax({
        type: 'GET',
        url: '/birds'
    }).then( function( response ){
        console.log( 'back from GET:', response );
        let el = $( '#birdsOut' );
        el.empty();

        for( let i=0; i< response.length; i++ ){
            el.append( `<li>
                <button class="deleteBirdButton">Delete</button>
                ${ response[i].first_name }
                ${ response[i].last_name }: 
                born ${ response[i].dob.split( "T" )[0] }, 
                ${ response[i].height } tall
            </li>`)
        }
    }).catch( function( err ){
        console.log( err );
        alert( 'nope' );
    }) //end AJAX
}