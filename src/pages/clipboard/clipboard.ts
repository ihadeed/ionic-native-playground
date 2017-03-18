import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';

/*
  Generated class for the Clipboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-clipboard',
  templateUrl: 'clipboard.html'
})
export class ClipboardPage {

  result;
  error;
  input;

  constructor(
    private clipboard: Clipboard
  ) {}

  copy() {
    this.clipboard.copy(this.input)
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }

  paste() {
    this.clipboard.paste()
      .then(v => this.result = v)
      .catch(e => this.error = e);
  }


}
