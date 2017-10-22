(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.scrollspy').scrollSpy();

    $('.modal').modal({
      ready: function() {
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      }
    });

    $('.button-collapse').sideNav({
      menuWidth: 300,
      edge: 'right',
      draggable: true,
      closeOnClick: true
      }
    );

  }); // end of document ready
})(jQuery); // end of jQuery name space