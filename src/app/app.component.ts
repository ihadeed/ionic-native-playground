import { Component, NgZone } from '@angular/core';
import {ModalController, Platform} from 'ionic-angular';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignatureService } from '../providers/signature';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage ;

  constructor(
    platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , private modalCtrl: ModalController
    , sigs: SignatureService
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#387ef5');
      splashScreen.hide();
    });

    document.addEventListener('deviceready', () => {
      console.log(NgZone.isInAngularZone());

    });
  }

}
