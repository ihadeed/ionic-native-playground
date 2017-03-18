import {Component, NgZone} from '@angular/core';

import { BatteryStatus } from '@ionic-native/battery-status';


@Component({
  selector: 'page-battery-status',
  templateUrl: 'battery-status.html'
})
export class BatteryStatusPage {

  result;
  subscription;

  constructor(
    private batteryStatus: BatteryStatus
  ){
    console.log('Is the battery staus page in angular zone', NgZone.isInAngularZone());

  }

  getStatus() {
    console.log('Are we in angular zone?', NgZone.isInAngularZone());

    this.subscription = this.batteryStatus.onChange().subscribe(v => {
      console.log('Are we in angular zone?', NgZone.isInAngularZone());
      console.log('got new value', v);
      // this.ngZone.run(() => {
        this.result = v
      // });
    });
  }

  ngOnDestroy() {
      if (this.subscription && this.subscription.unsubscribe) {
        this.subscription.unsubscribe();
      }
  }

}
