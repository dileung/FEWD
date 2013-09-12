var geocoder;
var map;

function initialize() {
  geocoder = new google.maps.Geocoder();

  xx = 123;

  var mapOptions = {
    center: new google.maps.LatLng(45.101926,97.382813),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  var myLatlng = new google.maps.LatLng(25.363882,131.044922);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Hello World!"
  });

}
google.maps.event.addDomListener(window, 'load', initialize);

function codeAddress() {
  var address = document.getElementById("address").value;
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
      });
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}