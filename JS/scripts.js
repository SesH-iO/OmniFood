$(document).ready(function () {
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky');
        }else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
      })

    /*var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })*/

      $('.js--scroll-to-plans').click(function(){
          $('html,body').animate({scrollTop: $('.js--section-plans').offset().top},1000)
      });

      $('.js--scroll-to-start').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000)
    });

    
    /*---------------------------- Smooth scrolling jQuery ---------------------------------*/
/*
    // Select all links with hashes
$('a[href*="#"]')

  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')

  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
*/

      /*---------------------- Smooth Navigation scrolling jQuery!! -------------------------*/
/*

// For name.

 $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
*/

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {

    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos}, 500);
})

// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]');

    /* animation on scroll */
    $('.js--wp-one').waypoint(function(direction) {
      $('.js--wp-one').addClass('animated fadeInRight');
    },{
      offset: '60%'
    });

    $('.js--wp-two').waypoint(function(direction) {
      $('.js--wp-two').addClass('animated flipInY');
    },{
      offset: '50%'
    });

    $('.js--wp-three').waypoint(function(direction) {
      $('.js--wp-three').addClass('animated pulse');
    },{
      offset: '50%'
    });

    $('.js--wp-four').waypoint(function(direction) {
      $('.js--wp-four').addClass('animated zoomIn');
    },{
      offset: '50%'
    });

    /* mobile navigation */

    $('.js--menu-bar').click(function(){
      var nav = $('.js--main-nav');
      var icn = $('.js--menu-bar i');

      nav.slideToggle(200);
      
      if(icn.hasClass('fa-bars')) {
        icn.addClass('fa-times');
        icn.removeClass('fa-bars');
      } else {
        icn.addClass('fa-bars');
        icn.removeClass('fa-times');
      }
    });

});

/*



*/