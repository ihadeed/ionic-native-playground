import {Component, NgZone} from '@angular/core';
import {ViewController, Platform} from 'ionic-angular';
import {Keyboard} from "@ionic-native/keyboard";
@Component({
  selector: 'page-keyboard',
  templateUrl: 'keyboard.html'
})
export class KeyboardPage {

  constructor(
    private keyboard: Keyboard
  ) {
  }

  show() {
    console.log('Showing Keyboard');
    this.keyboard.show();
  }

  close() {
    console.log('Closing keyboard');
    this.keyboard.close();
  }


}
