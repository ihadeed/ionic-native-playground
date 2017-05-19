import { Component } from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';
import {AdMobFree} from "@ionic-native/admob-free";

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-ad-mob-free',
  templateUrl: 'ad-mob-free.html',
})
export class AdMobFreePage {

  constructor(
    private admob: AdMobFree,
    private platform: Platform
  ) {
  }

  showBanner() {
    this.admob.banner.show()
      .catch(e => console.log(e))
  }

  hideBanner() {
    this.admob.banner.hide()
      .catch(e => console.log(e))
  }

  showInterstitial() {
    const interstitialId: string = this.platform.is('android')? 'ca-app-pub-7440819860488619/9903681087' : 'ca-app-pub-7440819860488619/7170540680';

    this.admob.interstitial.config({
      id: interstitialId,
      isTesting: false,
      autoShow: true
    });

    this.admob.interstitial.prepare()
      .catch(e => console.log(e));
  }

  showRewardVideo() {
    const rewardId: string = this.platform.is('android')? 'ca-app-pub-7440819860488619/2380414286' : 'ca-app-pub-7440819860488619/8647273888';

    this.admob.rewardVideo.config({
      id: rewardId,
      isTesting: false,
      autoShow: true
    });

    this.admob.rewardVideo.prepare()
      .catch(e => console.log(e));
  }

}
