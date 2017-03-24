import { Component } from '@angular/core';
import { BrowserTab } from '@ionic-native/browser-tab';

@Component({
  selector: 'page-browser-tab',
  templateUrl: 'browser-tab.html'
})
export class BrowserTabPage {

  constructor(public plugin: BrowserTab) { }

}
