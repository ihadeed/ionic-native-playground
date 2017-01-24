import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import {GooglePlus} from "ionic-native";

@Component({
  selector: 'page-google-plus',
  templateUrl: 'google-plus.html'
})
export class GooglePlusPage {

  constructor(
    public viewCtrl: ViewController
  ) {
  }

  login() {
    GooglePlus.login()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));

  }

}
