import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {DeviceAccounts} from "ionic-native";

/*
  Generated class for the DeviceAccounts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-device-accounts',
  templateUrl: 'device-accounts.html'
})
export class DeviceAccountsPage {

  constructor(public viewCtrl: ViewController) {}

  getDeviceAccounts() {
    DeviceAccounts.get()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

}
