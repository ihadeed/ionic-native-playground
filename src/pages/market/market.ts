import { Component } from '@angular/core';
import {Platform, ViewController} from 'ionic-angular';
import { Market } from '@ionic-native/market';

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})
export class MarketPage {

  constructor(
    private market: Market
  ) {}

  openInstagram() {
    this.market.open('com.instagram.android');
  }

}
