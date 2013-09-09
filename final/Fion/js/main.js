function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(45.101926,97.382813),
    zoom: 3,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!"
  });