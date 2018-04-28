/**
 * Created by Chandel on 19-04-2018.
 */
app.controller('ContactCtrl', function($scope,$state){
    function myMap() {
        var myCenter = new google.maps.LatLng(51.508742,-0.120850);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 12};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);
      }

    $scope.contact = function(){
        $state.go("contact")
    }
})
