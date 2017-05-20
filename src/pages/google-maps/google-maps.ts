import { Component } from '@angular/core';

@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {

  options: any = {
    controls: {
      compass: true,
      myLocationButton: true,
      indoorPicker: true,
      zoom: true
    }
  };

  onMapClick(e) {
    console.log('map was clicked', e);
  }

  onMapReady(e) {
    console.log('map is ready', e);
  }

}
