import { Component } from '@angular/core';

@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsPage {

  onMapClick(e) {
    console.log('map was clicked', e);
  }

  onMapReady(e) {
    console.log('map is ready', e);
  }

}
