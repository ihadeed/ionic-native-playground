import { Component } from '@angular/core';
import {GooglePlus} from "@ionic-native/google-plus";

@Component({
  selector: 'page-google-plus',
  templateUrl: 'google-plus.html'
})
export class GooglePlusPage {

  result;
  error;


  constructor(
    private googlePlus: GooglePlus
  ) {}

  login() {
    this.googlePlus.login()
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }


}
