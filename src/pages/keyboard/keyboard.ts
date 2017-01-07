import {Component, NgZone} from '@angular/core';
import {ViewController, Platform} from 'ionic-angular';
import {Keyboard} from "ionic-native";
@Component({
  selector: 'page-keyboard',
  templateUrl: 'keyboard.html'
})
export class KeyboardPage {

  constructor(
    public viewCtrl: ViewController,
  ) {
  }

  show() {
    console.log('Showing Keyboard');
    Keyboard.show();
  }

  close() {
    console.log('Closing keyboard');
    Keyboard.close();
  }


}
