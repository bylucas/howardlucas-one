
//Navigation main menu
( function() {
  const siteNavigation = document.getElementById( 'site-navigation' );

  const hamburger = document.querySelector('.hamburger')

  const button = siteNavigation.getElementsByTagName( 'div' )[ 0 ];

  // Toggle the .toggled class and the aria-expanded value each time the button is clicked.
  button.addEventListener( 'click', function() {
    siteNavigation.classList.toggle( 'toggled' );
hamburger.classList.toggle("is-active");
    if ( button.getAttribute( 'aria-expanded' ) === 'true' ) {
      button.setAttribute( 'aria-expanded', 'false' );
    } else {
      button.setAttribute( 'aria-expanded', 'true' );
    }
  } );

  // Remove the .toggled class and set aria-expanded to false when the user clicks outside the navigation.
  document.addEventListener( 'click', function( event ) {
    const isClickInside = siteNavigation.contains( event.target );

    if ( ! isClickInside ) {
      siteNavigation.classList.remove( 'toggled' );
      button.setAttribute( 'aria-expanded', 'false' );
      hamburger.classList.remove("is-active");
    }
  } );
 }() );