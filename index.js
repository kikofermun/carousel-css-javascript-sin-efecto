document.addEventListener( 'DOMContentLoaded', () => {
    document.querySelector( '.arrow.left' ).addEventListener( 'click', ( el ) => {
        mostrarSiguiente( -1 );
    });
    document.querySelector( '.arrow.right' ).addEventListener( 'click', ( el ) => {
        mostrarSiguiente( 1 );
    });
});

function mostrarSiguiente( i ){
    let imagenes = document.querySelectorAll( '.container .img' );
    let max = imagenes.length;
    let anterior = findIndexClass( imagenes, 'anterior' );
    let actual = findIndexClass( imagenes, 'actual' );
    let siguiente = findIndexClass( imagenes, 'siguiente' );
    document.querySelector( '.anterior' ).classList.remove( 'anterior' );
    document.querySelector( '.actual' ).classList.remove( 'actual' );
    document.querySelector( '.siguiente' ).classList.remove( 'siguiente' );
    switch( i ){
        case 1:
            anterior = anterior >= max - 1 ? 0 : anterior + 1;
            actual = actual >= max - 1 ? 0 : actual + 1;
            siguiente = siguiente >= max - 1 ? 0 : siguiente + 1;
            break;
        case -1:
            anterior = anterior <= 0 ? max - 1 : anterior - 1;
            actual = actual <= 0 ? max - 1 : actual - 1;
            siguiente = siguiente <= 0 ? max - 1 : siguiente - 1;
            break;
    }
    document.querySelectorAll( '.container .img' )[ anterior ].classList.add( 'anterior' );
    document.querySelectorAll( '.container .img' )[ actual ].classList.add( 'actual' );
    document.querySelectorAll( '.container .img' )[ siguiente ].classList.add( 'siguiente' );
}

function findIndexClass( elementos, clase ){
    let index = -1;
    elementos.forEach( ( el, i ) => {
        if( el.classList.contains( clase ) ){
            index = i;
        }
    });
    return index;
}

