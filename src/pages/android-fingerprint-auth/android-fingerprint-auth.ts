import { Component } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
@Component({
  selector: 'page-android-fingerprint-auth',
  templateUrl: 'android-fingerprint-auth.html'
})
export class AndroidFingerprintAuthPage {

  constructor(public plugin: AndroidFingerprintAuth) {}

}
