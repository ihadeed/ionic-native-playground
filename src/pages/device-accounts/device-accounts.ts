import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {DeviceAccounts} from "@ionic-native/device-accounts";

@Component({
  selector: 'page-device-accounts',
  templateUrl: 'device-accounts.html'
})
export class DeviceAccountsPage {

  result;
  error;

  constructor(
    private deviceAccounts: DeviceAccounts
  ) {}

  getDeviceAccounts() {
    this.deviceAccounts.get()
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

}
