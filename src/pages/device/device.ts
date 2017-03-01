import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {Device} from "@ionic-native/device";

/*
  Generated class for the Device page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class DevicePage {

  constructor(
    private device: Device
  ) {}


  getDeviceInfo() {

    console.log(this.device);

    console.log(this.device.uuid);

  }


}
