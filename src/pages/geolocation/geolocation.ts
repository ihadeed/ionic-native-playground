import {Component, NgZone} from '@angular/core';
import {Geolocation, GeolocationOptions} from '@ionic-native/geolocation';

/*
  Generated class for the Geolocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {

  result;
  error;
  watch;

  options: GeolocationOptions = {
    enableHighAccuracy: true,
    maximumAge: 5000
  };

  constructor(
    private geolocation: Geolocation
    , private ngZone: NgZone
  ) {}

  getLocation() {
    console.log('isInAngularZone?', NgZone.isInAngularZone());
    this.geolocation.getCurrentPosition(this.options)
      .then(v => {
        console.log('Got a value yo', v);
        console.log('isInAngularZone?', NgZone.isInAngularZone());
        this.result = v;
      })
      .catch(e => this.error = e);
  }

  watchLocation() {
    this.watch = this.geolocation.watchPosition(this.options).subscribe(v => {
      console.log('Got new val fro mobser', v);
      console.log('isInAngularZone?', NgZone.isInAngularZone());
      this.ngZone.run(() => {
        this.result = v;
      });
    });
  }

  stopWatchingLocation() {
    if (this.watch && this.watch.unsubscribe) this.watch.unsubscribe();
  }

  ngOnDestroy() {
    this.stopWatchingLocation();
  }

}
