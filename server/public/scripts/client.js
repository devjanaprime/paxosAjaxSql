$( document ).ready( onReady );


function addBird(){
    const birdToSend = {
        first_name: $( '#first_nameIn' ).val(),
        last_name: $( '#last_nameIn' ).val(),
        dob: $( '#dobIn' ).val(),
        height: $( '#heightIn' ).val(),
    }
    console.log( 'sending:', birdToSend );
    $.ajax({
        type: 'POST',
        url: '/birds',
        data: birdToSend
    }).then( function( response ){
        console.log( 'back from POST:', response );
    }).catch( function( err ){
        console.log( err );
        alert( 'no workly' );
    }) // end AJAX
}

function onReady(){
    getBirds();
    $( '#addBirdButton' ).on( 'click', addBird );
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
            ${ response[i].first_name }</li>`)
        }
    }).catch( function( err ){
        console.log( err );
        alert( 'nope' );
    }) //end AJAX
}