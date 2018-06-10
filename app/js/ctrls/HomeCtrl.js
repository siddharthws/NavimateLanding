/**
 * Created by Siddharth on 08-04-2018.
 */
app.controller('HomeCtrl', function($scope, $state, $window){
    $(document).ready(function() {
        $("html,body").animate({scrollTop: 0}, 0); //0ms for example
    });

    var $animation_elements = $('.animation-element');
    var $win = $(window);

    function check_if_in_view() {
        var window_height = $win.height();
        var window_top_position = $win.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position )) {
                $element.addClass('in-view');
            }
            /*else {
              $element.removeClass('in-view');
            }*/
        });
    }

    function imageError(num,image){
        image.onerror = "";
        switch(num){
            case 1:
            {
                image.src = "/images/feature1.png";
            }
            break;
            case 2:
            {
                image.src = "/images/feature2.png";
            }
            break;
            case 3:
            {
                image.src = "/images/feature3.png";
            }
            break;
        }
    }

    $win.on('scroll resize', check_if_in_view);
    $win.trigger('scroll');

    $(".con").on('click', function() {
        this.classList.toggle("change");
        $("#navbar-fixed-scroll").slideToggle();
    });

    var ex_pixels = 0;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(width > 600){
        ex_pixels = -70;
    }
    $(document).ready(function(){
        /*scroll to features*/
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top + ex_pixels
                }, 1000, function(){});
            }
        });

        $('#feature1').on("error",(function(){
            $(this).attr('src', '/images/feature1.png');
        }));
        $('#feature2').on("error",(function(){
            $(this).attr('src', '/images/feature2.png');
        }));
        $('#feature3').on("error",(function(){
            $(this).attr('src', '/images/feature3.png');
        }));
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

        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-menu-mobile").style.top = "0";
        } else {
            document.getElementById("navbar-menu-mobile").style.top = "-380px";
        }
        prevScrollpos = currentScrollPos;
    }

    $scope.toggleClose = function(){
        $(".con").click();
    }

    $scope.aboutus = function(){
        $state.go("aboutus")
    }

    $scope.login = function () {
        $window.open("https://biz.navimateapp.com/#/home/login", "_blank")
    }

    $scope.register = function () {
        $window.open("https://biz.navimateapp.com/#/home/register", "_blank")
    }

    $scope.legal = function () {
        $state.go("legal")
    }

    $scope.androidApp = function () {
        $window.open("https://play.google.com/store/apps/details?id=com.biz.navimate", "_blank")
    }

    $scope.facebook = function () {
        $window.open("https://www.facebook.com/navimateapp/", "_blank")
    }

    $scope.twitter = function () {
        $window.open("https://twitter.com/NavimateApp", "_blank")
    }

    $scope.linkedin = function () {
        $window.open("https://in.linkedin.com/company/navimateapp", "_blank")
    }
})
