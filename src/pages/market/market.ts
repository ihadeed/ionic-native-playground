import { Component } from '@angular/core';
import {Platform, ViewController} from 'ionic-angular';
import { Market } from 'ionic-native';

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {

  constructor(
    private platform: Platform,
    public viewCtrl: ViewController
  ) {}

  openInstagram() {
    this.platform.ready()
      .then(() => {
        Market.open('com.instagram.android');
      });
  }

}
