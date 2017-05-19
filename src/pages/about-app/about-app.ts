import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BrowserTab } from "@ionic-native/browser-tab";

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-about-app',
  templateUrl: 'about-app.html',
})
export class AboutAppPage {

  constructor(
    private iab: BrowserTab
  ) {
  }

  openGithubRepo() {
    this.iab.openUrl('https://github.com/ihadeed/ionic-native-playground').catch(() => {});
  }

}
