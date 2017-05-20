import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignatureService } from '../providers/signature';
import '../object-creator';
import {AppConfigProvider} from "../providers/app-config/app-config";
import {AdMobFree} from "@ionic-native/admob-free";
import { noop } from 'lodash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = 'HomePage';

  set adsEnabled(val: boolean) {
    this.config.adsEnabled = val;
    if (val === true) {
      this.admob.banner.show().catch(noop);
    } else {
      this.admob.banner.hide().catch(noop);
    }
  }

  get adsEnabled(): boolean {
    return this.config.adsEnabled;
  }

  constructor(
    platform: Platform
    , statusBar: StatusBar
    , splashScreen: SplashScreen
    , sigs: SignatureService
    , private config: AppConfigProvider
    , private admob: AdMobFree
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString('#039BE5');
      splashScreen.hide();

      admob.banner.config({
        id: platform.is('android')? 'ca-app-pub-7440819860488619/8426947888' : 'ca-app-pub-7440819860488619/5693807487',
        isTesting: false,
        autoShow: false
      });

      admob.banner.prepare()
        .then(() => {
          if (config.adsEnabled) {
            console.log('Ads are enabled');
            admob.banner.show()
              .catch(e => console.log('Error showing banner', e));
          }
        })
        .catch(e => console.log('Error preparing ad', e));



    });
  }

}
