import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {DeviceAccounts} from "@ionic-native/device-accounts";

@Component({
  selector: 'page-device-accounts',
  templateUrl: 'device-accounts.html'
})
export class DeviceAccountsPage {

  constructor(
    private deviceAccounts: DeviceAccounts
  ) {}

  getDeviceAccounts() {
    this.deviceAccounts.get()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));
  }

}
