
import React from 'react'

google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
 
var marker;
function placeMarker(location) {
  if(marker){ //on vérifie si le marqueur existe
    marker.setPosition(location); //on change sa position
  }else{
    marker = new google.maps.Marker({ //on créé le marqueur
      position: location,
      map: map
    });
  }
  inputLatitude.value=location.lat();
  inputLongitude.value=location.lng();
}