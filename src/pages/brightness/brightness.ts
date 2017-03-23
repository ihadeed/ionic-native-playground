import { Component } from '@angular/core';
import {Platform, ViewController} from 'ionic-angular';
import {Brightness} from "@ionic-native/brightness";

/*
  Generated class for the Brightness page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-brightness',
  templateUrl: 'brightness.html'
})
export class BrightnessPage {

  brightness: number = 0;

  _keepScreenOn: boolean = false;

  set keepScreenOn(val: boolean) {
    this._keepScreenOn = val;
    this.brightnessPlugin.setKeepScreenOn(val);
  }

  get keepScreenOn(): boolean {
    return this._keepScreenOn;
  }

  constructor(
    private brightnessPlugin: Brightness
    , private platform: Platform
  ) {
    platform.ready().then(() => {
      brightnessPlugin.getBrightness()
        .then(val => {
          this.brightness = val * 100;
        })
        .catch(() => {});
    });
  }

  updateBrightness() {
    this.brightnessPlugin.setBrightness(this.brightness / 100).catch(() => {});
  }

}
