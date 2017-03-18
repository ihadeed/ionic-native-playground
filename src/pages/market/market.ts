import { Component } from '@angular/core';
import {Platform, ViewController} from 'ionic-angular';
import { Market } from '@ionic-native/market';

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {

  result;
  error;

  constructor(
    private market: Market
  ) {}

  openInstagram() {
    this.market.open('com.instagram.android')
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

}
