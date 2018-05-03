/**
 * Created by Chandel on 19-04-2018.
 */
app.controller('ContactCtrl', function($scope,$state){
    $(document).ready(function() {
        $("html,body").animate({scrollTop: 0}, 0); //0ms for example
    });

    function myMap() {
        var myCenter = new google.maps.LatLng(51.508742,-0.120850);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 12};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
    }

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        var elmnt = document.getElementById("header");
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar-fixed-scroll").style.top = "0";
        } else {
            document.getElementById("navbar-fixed-scroll").style.top = "-260px";
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
