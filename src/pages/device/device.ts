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

  result;

  constructor(
    private device: Device
  ) {}


  getDeviceInfo() {

    this.result = {
      cordova: this.device.cordova,
      model: this.device.model,
      platform: this.device.platform,
      uuid: this.device.uuid,
      version: this.device.version,
      manufacturer: this.device.manufacturer,
      isVirtual: this.device.isVirtual,
      serial: this.device.serial
    };

  }


}
