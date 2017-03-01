import { Component } from '@angular/core';
import {ViewController} from 'ionic-angular';
import {GooglePlus} from "@ionic-native/google-plus";

@Component({
  selector: 'page-google-plus',
  templateUrl: 'google-plus.html'
})
export class GooglePlusPage {

  constructor(
    private googlePlus: GooglePlus
  ) {
  }

  login() {
    this.googlePlus.login()
      .then(console.log.bind(console))
      .catch(console.error.bind(console));

  }

}
