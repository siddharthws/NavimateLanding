/**
 * Created by Siddharth on 08-04-2018.
 */
app.controller('HomeCtrl', function($scope,$state){
    $(document).ready(function() {
        $("html,body").animate({scrollTop: 0}, 0); //0ms for example
    });

    var $animation_elements = $('.animation-element');
    var $window = $(window);

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

    $(".con").on('click', function() {
        this.classList.toggle("change");
        $("#navbar-fixed-scroll").slideToggle();
    });



    $(document).ready(function(){
        /*scroll to features*/
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 2000);
            return false;
        });
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var elmnt = document.getElementById("header");
        //var y = elmnt.scrollHeight;
        var y = 70;
        if (document.body.scrollTop > y || document.documentElement.scrollTop > y) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }

        var z=260;
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
