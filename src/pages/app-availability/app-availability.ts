import { Component } from '@angular/core';
import { AppAvailability } from '@ionic-native/app-availability';
@Component({
  selector: 'page-app-availability',
  templateUrl: 'app-availability.html'
})
export class AppAvailabilityPage {

  constructor(public plugin: AppAvailability) {}

}
