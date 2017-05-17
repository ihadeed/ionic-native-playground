import { Component } from '@angular/core';
import {GoogleMap, GoogleMapsEvent, LatLng, Marker} from "@ionic-native/google-maps";

@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {

  onMapClick(e) {
    console.log('map was clicked', e);
  }

  onMapReady(map: GoogleMap) {
    console.log('map is ready');

    map.addMarker(new LatLng(0, 0))
      .then((marker: Marker) => {

        marker.setDraggable(true);
        marker.on(GoogleMapsEvent.MARKER_DRAG_END)
          .subscribe(() => {
            marker.getPosition()
              .then((position: LatLng) => {
                console.log('Marker was moved to the following position: ', position);
              });
          });

      });

  }

}
