$( document ).ready( onReady );

function onReady(){
    getBirds();
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