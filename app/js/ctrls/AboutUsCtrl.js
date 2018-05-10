/**
 * Created by Chandel on 04-05-2018.
 */
app.controller('AboutUsCtrl', function($scope, $state){
    $(document).ready(function() {
        $("html,body").animate({scrollTop: 0}, 0); //0ms for example
    });

    /*$(window).on('beforeunload', function() {
        $(window).scrollTop(0);
    });*/

    var $animation_elements = $('.animation-element');
    var $window = $(window);

    $(".con").on('click', function() {
        this.classList.toggle("change");
        $("#navbar-fixed-scroll").slideToggle();
    });

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
            }
            /*else {
              $element.removeClass('in-view');
            }*/
        });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var elmnt = document.getElementById("header");
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-menu-mobile").style.top = "0";
        } else {
            document.getElementById("navbar-menu-mobile").style.top = "-260px";
        }
        prevScrollpos = currentScrollPos;
    }

    $scope.contact = function(){
        $state.go("contact")
    }

    $scope.aboutus = function(){
        $state.go("aboutus")
    }
})
