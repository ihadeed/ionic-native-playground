import { Injectable } from '@angular/core';

const ADS_ENABLED_KEY = 'inp_ads_enabled';

@Injectable()
export class AppConfigProvider {

  set adsEnabled(val: boolean) {
    localStorage.setItem(ADS_ENABLED_KEY, JSON.stringify(val));
  }

  get adsEnabled(): boolean {
    try {
      let config = JSON.parse(localStorage.getItem(ADS_ENABLED_KEY));
      if (typeof config === 'boolean') {
        return config;
      }
    } catch (e) {}

    this.adsEnabled = false;
    return false;
  }

}
